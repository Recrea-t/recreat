import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

const Header = () => {
	return (
		<div className="page-header">
			<div className="page-header-image"></div>
			<Container>
				<Row className="justify-content-start">
					<Col className="title-tagline">
						<h1 className="px-3 shadow-sm">El teu fuster<span>al Pallars Sobirà</span></h1>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Header
