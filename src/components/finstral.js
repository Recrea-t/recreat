import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {Container} from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"

import Heading from "../components/heading"

const Finstral = (props) => {
	const {name, image, catalog, configurator, text} = props.item

	return (
		<Container>
			<Heading heading={name} />

			<p className="text-sm" dangerouslySetInnerHTML={{__html: text}}></p>

			<div className="configurador row row-cols-2 my-3 g-0">
				<Img className="col-6 col-sm-8" fluid={image.childImageSharp.fluid} alt="" />

				<div className="col-6 col-sm-4 bg-primary p-3 d-flex flex-column">
					<div className="h-100 m-3 d-none d-sm-block">
						<Img fluid={configurator.image.childImageSharp.fluid} alt={configurator.name} />
					</div>
					<a href={configurator.url} className="btn btn-secondary mt-autopx-0" target="_blank" rel="noreferrer" title="Configurador de Finstral">{configurator.name}</a>
				</div>
			</div>

			<div>
				<a href="/#contacte" className="btn btn-secondary mt-auto me-5" title="Demana'ns Pressupost">Demana Pressupost</a>
				<a href={catalog} className=" btn btn-secondary mt-auto" target="_blank" rel="noreferrer" title="Catàleg de Finstral">Catàleg</a>
			</div >
		</Container >
	)
}

export default Finstral
