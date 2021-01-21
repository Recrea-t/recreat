import React from "react"
import useSiteMetadata from '../siteMetadata'

import { Flex, Box, Container, Text, Link, Heading, VStack, HStack, Icon } from '@chakra-ui/react'

import SocialLink from '../ui/SocialLink'
import ContactForm from '../ui/ContactForm'

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare"
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare"
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare"

const Contact = () => {
    const {
        organization,
        social,
    } = useSiteMetadata()

    return (
        <Box
            id="contacte"
            w="full"
            py={4}
            bg="mangoTango.500"
            color="white">
            <Container>
                <Heading variant="in-index">Contacte</Heading>

                <Flex
                    align={["center", "center", "center", "center"]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}>

                    <VStack spacing={4} mr={{ base: 0, md: "4rem" }} alignItems="flex-start">
                        <Box>
                            <Text>Tens una idea, una necessitat, un dubte, una proposta?</Text>
                            <Text>Escriu-nos o visita'ns a l'espai de coworking d'Esterri d'Àneu.</Text>
                        </Box>
                        <ContactForm />
                    </VStack>

                    <VStack spacing={4} justify="center" textAlign="center">
                        <Icon as={FaMapMarkerAlt} h={12} w={12} />
                        <Text dangerouslySetInnerHTML={{ __html: organization.address }} />
                        <Text ><Link to={`tel:${organization.phone.number}`} title="Truca'ns">{organization.phone.title}</Link></Text>
                        <Text ><Link to={`mailto:${organization.email}`} title="Escriu-nos">{organization.email}</Link></Text>
                        <HStack spacing={4}>
                            <SocialLink item={social.instagram} icon={FaInstagramSquare} />
                            <SocialLink item={social.facebook} icon={FaFacebookSquare} />
                            <SocialLink item={social.twitter} icon={FaTwitterSquare} />
                        </HStack>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default Contact
