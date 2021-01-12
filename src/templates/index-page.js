import "@fontsource/montserrat"
import "@fontsource/montserrat/900.css"

import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'
import {Container, Row, Col} from "react-bootstrap"

import Layout from "../components/layout"
import animation from "../images/home.gif"

export const IndexPageTemplate = ({frontmatter}) => {
	return (
		<Container>
			<img src={animation} alt={frontmatter.description} />
		</Container >
	)
}

IndexPageTemplate.propTypes = {}

const IndexPage = ({data}) => {
	const {frontmatter} = data.markdownRemark

	return (
		<Layout title={frontmatter.title} description={frontmatter.description}>
			<IndexPageTemplate frontmatter={frontmatter} />
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default IndexPage

export const query = graphql`
  query IndexPageTemplateQuery {
		markdownRemark(frontmatter: {templateKey: {eq: "index-page" } }) {
			frontmatter {
				title
        description
			}
    }
  }
`
