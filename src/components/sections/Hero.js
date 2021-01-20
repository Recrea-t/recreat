import React from "react"
import {Link as GatsbyLink} from 'gatsby'

import {Flex, Text, Link} from '@chakra-ui/react'


const Hero = (props) => {
	const {frontmatter} = props.data.markdownRemark
	return (
		<Flex
			direction="column"
			w="full"
			p={16}
			mb={8}
			bg="mangoTango.500"
			color="white">
			<Text
				as="h1"
				fontFamily="Playfair Display"
				fontSize={{base: "2xl", md: "6xl"}}
			>"{frontmatter.description}"</Text>
			<Text
				display="block"
				alignSelf="flex-end"
				textTransform="uppercase"
				fontWeight="bold">
				<Link to="/qui-som" title="Qui som?" as={GatsbyLink}>Saber-ne més</Link>
			</Text>
		</Flex>
	)
}

export default Hero
