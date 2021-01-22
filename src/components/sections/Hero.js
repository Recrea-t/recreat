import React from "react"
import {Link as GatsbyLink} from 'gatsby'

import {Flex, Box, Container, Text, Button} from '@chakra-ui/react'


const Hero = (props) => {
	const {frontmatter} = props.data.markdownRemark
	return (
		<Box
			w="full"
			mb={8}
			py={4}
			bg="mangoTango.500"
			color="white">
			<Container>
				<Flex direction="column">
					<Text
						as="h1"
						fontFamily="Playfair Display"
						fontSize={{base: "2xl", md: "6xl"}}
					>"{frontmatter.description}"</Text>
					<Button
						as={GatsbyLink}
						to="/qui-som"
						title="Qui som?"
						variant="custom-link"
						colorScheme="white"
						alignSelf="flex-end"
					>Saber-ne més</Button>
				</Flex >
			</Container >
		</Box >
	)
}

export default Hero
