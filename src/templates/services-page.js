import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import {Grid, Container, Text, Heading, Image, Wrap, WrapItem, GridItem, SimpleGrid} from '@chakra-ui/react'

import Layout from "../components/Layout"

const ServiceItem = (props) => {
	return (
		<>
			<Heading>{props.nom}</Heading>
			<Grid
				templateColumns={{base: "1fr", lg: "repeat(3, 1fr)"}}
				gap={8}
				mb={8}
			>
				<GridItem>
					<Text mb={4}>{props.descripcio}</Text>
					<Wrap direction="column" fontFamily="Playfair Display">
						{props.detall.map((item, index) =>
							<WrapItem key={index}><Text w="full" textAlign="center" >{item}</Text></WrapItem>
						)}
					</Wrap>
				</GridItem>

				<GridItem colSpan={2}>
					<SimpleGrid columns={3} spacing={4}>
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
						<Image src={props.imatge} fallbackSrc="https://via.placeholder.com/250" />
					</SimpleGrid>
				</GridItem>
			</Grid>
		</>
	)
}
const ServicesPage = (props) => {
	const {frontmatter} = props.data.markdownRemark
	const services = frontmatter.serveis

	return (
		<Layout
			title={frontmatter.title}
			description={frontmatter.description}>
			<Container variant="with-border">
				{services.map((service, index) => <ServiceItem key={index} {...service} />)}
			</Container>
		</Layout>
	)
}

ServicesPage.propTypes = {
	data: PropTypes.shape({
		html: PropTypes.object,
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

export default ServicesPage

export const query = graphql`
	query ServicesPageTemplateQuery($id: String) {
		markdownRemark(id: {eq: $id}) {
			id
			html
			frontmatter {
				title
        description
				serveis {
					nom
					descripcio
					detall
				}
			}
    }
  }
`

