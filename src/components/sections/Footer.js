import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {Box, Flex, HStack, Text, Link, StackDivider} from "@chakra-ui/react"

const Footer = (props) => {
	const textCookiesLink = "Política de galetes"

	return (
		<Flex
			as="footer"
			align="center"
			justify="center"
			w="full"
			p={4}
			bg="dimGray.500"
			color="white"
			{...props}
		>
			<Box>
				<HStack spacing={2} divider={<StackDivider />}>
					<Text>&copy; {new Date().getFullYear()} {props.title}</Text>
					<Link
						to="/politica-de-galetes"
						title={textCookiesLink}
						as={GatsbyLink}>{textCookiesLink}</Link>
				</HStack>
			</Box>
		</Flex>
	)
}

export default Footer


