import React from "react"
import {graphql} from 'gatsby'
import PropTypes from 'prop-types'

import {Grid, VStack, Container, Text, Heading, Image, Wrap, WrapItem, GridItem, SimpleGrid} from '@chakra-ui/react'

import Layout from "../components/Layout"

const ServiceItem = (props) => {
	const isXarxesSocials = props.id === "xarxes-socials"


	return (
		<>
			<Heading id={props.id}>{props.nom}</Heading>
			<Grid
				templateColumns={{base: "1fr", lg: "repeat(6, 1fr)"}}
				rowGap={8}
				columnGap={{lg: "2rem"}}
				mb={8}
			>
				<GridItem colSpan={isXarxesSocials ? 3 : 2}>
					<Text mb={4} dangerouslySetInnerHTML={{__html: props.descripcio}} />

					{!isXarxesSocials &&
						<Wrap direction="column" fontFamily="Playfair Display">
							{props.detall.map((item, index) =>
								<WrapItem key={index}><Text w="full" textAlign="center" >{item}</Text></WrapItem>
							)}
						</Wrap>
					}
				</GridItem>

				<GridItem colSpan={isXarxesSocials ? 3 : 4}>
					{isXarxesSocials ?
						<VStack spacing={4} textAlign="center" fontSize="xl">
							<Text textTransform="uppercase">Com gestionem les comunitats en línia?</Text>
							<Wrap direction="column" fontFamily="Playfair Display" w="full">
								{props.passes.map((item, index) =>
									<WrapItem key={index} pos="relative" bg="cultured.500" m={4} px={4} pb={4} pt={6}>
										<Image
											pos="absolute"
											top={-6}
											left="50%"
											w={10}
											ml={-5}
											objectFit="contain"
											src={item.imatge.publicURL}
											alt={item.text} />
										<Text w="full">{item.text}</Text>
									</WrapItem>
								)}
							</Wrap>
						</VStack>
						:
						<SimpleGrid columns={[1, null, 3]} spacing={4}>
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
							<Image w="full" objectFit="contain" src={props.imatge} fallbackSrc="https://via.placeholder.com/311x233" />
						</SimpleGrid>
					}
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
					id
					nom
					descripcio
					detall
					passes {
						text
						imatge {
							publicURL
						}
					}
				}
			}
    }
  }
`

