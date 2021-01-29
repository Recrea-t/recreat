import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {Box, Flex, HStack, Text, Link, StackDivider} from "@chakra-ui/react"

const Footer = (props) => {
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
						to="/politica-de-proteccio-de-dades"
						title="Política de protecció de dades personals"
						as={GatsbyLink}>Política de protecció de dades</Link>
				</HStack>
			</Box>
		</Flex>
	)
}

export default Footer


