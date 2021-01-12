import find from "lodash/find"
import React from "react"
import {Link} from "gatsby"
import useSiteMetadata from './siteMetadata'
import {useStaticQuery, graphql} from "gatsby"

const Product = (props) => {
	const {name, link, image} = props.product

	const data = useStaticQuery(graphql`
    {
			allFile(filter: {ext: {eq: ".svg"}}) {
				edges {
          node {
						name
						base
            publicURL
          }
        }
      }
    }
  `)

	const images = data.allFile.edges

	const publicURL = find(images, function (item) {
		return item.node.base === image
	}).node.publicURL


	return (
		<div className="servei">
			<img src={publicURL} alt={name} />
			<div className="d-flex flex-column">
				<Link to={link} className="w-100 btn btn-primary mt-auto">{name}</Link>
			</div>
		</div>
	)
}

const Products = () => {
	const {
		menuLinks,
	} = useSiteMetadata()

	const products = menuLinks.find(item => item.name === 'Serveis').submenuLinks

	return (
		<div className="serveis">
			{products.map((item, index) => <Product key={index} index={index} product={item} />)}
		</div>
	)
}

export default Products
