import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import {Grid, Container, Text, Heading, Image, Wrap, WrapItem, GridItem} from '@chakra-ui/react'

import Layout from "../components/Layout"

const PersonItem = (props) => {
	return (
		<>
			<Heading variant="no-margin">{props.nom}</Heading>
			<Heading as="h6" variant="subtitle">{props.subtitol}</Heading>
			<Grid
				templateColumns={{base: "1fr", lg: "repeat(4, 1fr)"}}
				gap={8}
			>
				<GridItem>
					<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
				</GridItem>

				<GridItem>
					<Text>{props.descripcio}</Text>
				</GridItem>

				<GridItem colSpan={2} bg="cultured.500" textAlign="center" fontSize="xl">
					<Text textTransform="uppercase">Formació reglada</Text>
					<Wrap direction="column" fontFamily="Playfair Display">
						{props.formacio.map((item, index) =>
							<WrapItem key={index}><Text>{item}</Text></WrapItem>
						)}
					</Wrap>
				</GridItem>
			</Grid>
		</>
	)
}
const AboutPage = (props) => {
	const {frontmatter} = props.data.markdownRemark
	const people = frontmatter.persones

	return (
		<Layout
			title={frontmatter.title}
			description={frontmatter.description}>
			<Container variant="with-border">
				{people.map((person, index) => <PersonItem key={index} {...person} />)}
			</Container>
		</Layout>
	)
}

AboutPage.propTypes = {
	data: PropTypes.shape({
		html: PropTypes.object,
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default AboutPage

export const query = graphql`
	query AboutPageTemplateQuery($id: String) {
		markdownRemark(id: {eq: $id}) {
			id
			html
			frontmatter {
				title
        description
				persones {
					nom
					subtitol
					descripcio
					formacio
				}
			}
    }
  }
`

