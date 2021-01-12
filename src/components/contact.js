import React from "react"
import {Row, Col} from "react-bootstrap"
import '../utils/font-awesome';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import useSiteMetadata from './siteMetadata'

export const Contact = () => {
	const {
		address,
		phone,
		email,
	} = useSiteMetadata().organization

	return (
		<Row className="g-4">
			<Col className="col-12 col-md-4 text-center">
				<p className="py-md-3">
					<FontAwesomeIcon icon="map-marker" /><br />{address}
				</p>
				<p className="py-md-3">
					<FontAwesomeIcon icon="phone" /><br />
					<a href={`phone:${phone.number}`}>{phone.title}</a>
				</p>
				<p className="py-md-3">
					<FontAwesomeIcon icon="envelope" /><br />
					<a href={`mailto:${email}`}>{email}</a>
				</p >
			</Col >
			<Col className="col-md-8">
				<div id="map-container-google" className="map-container w-100 h-100">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2946.0012556821384!2d1.1288096146198052!3d42.40641827918378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a605e0c8cda76f%3A0x3ffaf0fef97f3ad0!2sMarc%20Bruna%2C%20Fuster!5e0!3m2!1sen!2ses!4v1608391599370!5m2!1sen!2ses" style={{width: "100%", height: "100%", border: 0}} frameBorder="0" title="Google Map" allowFullScreen></iframe>
				</div>
			</Col>
		</Row >
	)
}

export default Contact
