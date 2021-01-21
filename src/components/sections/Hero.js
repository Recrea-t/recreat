import React from "react"
import { Link as GatsbyLink } from 'gatsby'

import { Flex, Box, Container, Text, Link } from '@chakra-ui/react'


const Hero = (props) => {
    const { frontmatter } = props.data.markdownRemark
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
                        fontSize={{ base: "2xl", md: "6xl" }}
                    >"{frontmatter.description}"</Text>
                    <Text display="block" alignSelf="flex-end">
                        <Link to="/qui-som" title="Qui som?" as={GatsbyLink} variant="btn">Saber-ne més</Link>
                    </Text>
                </Flex >
            </Container >
        </Box >
    )
}

export default Hero
