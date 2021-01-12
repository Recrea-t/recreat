import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {Container} from "react-bootstrap"
import Img from "gatsby-image/withIEPolyfill"
import {AnchorLink} from "gatsby-plugin-anchor-links";

import Heading from "../components/heading"

const Servei = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 0,
		}
	}

	render() {
		const {name, images, text} = this.props.servei
		const imageExpanded = images[this.state.selected]

		return (
			<Container>
				<Heading heading={name} />

				<p className="text-sm">{text}</p>

				<div className="row row-cols-2 my-3 g-0">
					<div className="col-6 col-sm-8 preview">
						<Img fluid={imageExpanded.childImageSharp.fluid} />
					</div>
					<div className="col-6 col-sm-4 px-3">
						<div className="thumbnails">
							{images.map((item, index) =>
								<div key={index} onClick={() => this.setState({selected: index})} onKeyDown={() => this.setState({selected: index})} role="button" tabIndex="0">
									<Img className="thumbnail" fluid={item.childImageSharp.fluid} alt="Imatge galeria" />
								</div>
							)}
						</div>
					</div>
				</div >

				<div>
					<AnchorLink
						to="/#contacte"
						className="btn btn-secondary mt-auto"
						title="Demana pressupost"
						stripHash
					/>
				</div >
			</Container >
		)
	}
}

export default Servei
