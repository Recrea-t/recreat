import React from "react";
import useSiteMetadata from "../siteMetadata";

import {
  Flex,
  Box,
  Container,
  Text,
  Link,
  Heading,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

import SocialLink from "../ui/SocialLink";
import ContactForm from "../ui/ContactForm";

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

const Contact = () => {
  const { organization, social } = useSiteMetadata();

  return (
    <Box w="full" py={4} bg="mangoTango.500" color="white">
      <Container>
        <Heading variant="in-index" id="contacte">
          Contacte
        </Heading>

        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          alignItems={["center", "start", "start", "start"]}
        >
          <VStack
            spacing={4}
            mr={{ base: 0, md: "4rem" }}
            alignItems="flex-start"
          >
            <Box>
              <Text>
                Tens una idea, una necessitat, un dubte, una proposta?
              </Text>
              <Text>Escriu-nos.</Text>
            </Box>
            <ContactForm />
          </VStack>

          <VStack spacing={4} justify="center" textAlign="center">
            <Link
              href="https://www.google.com/maps/place/Recreant,+disseny+gr%C3%A0fic+i+comunicaci%C3%B3/@42.67891,1.08687,15z/data=!4m5!3m4!1s0x0:0x55d2d5c449b4c611!8m2!3d42.67891!4d1.08687"
              title="Visita'ns"
              target="_blank"
              rel="noopener"
            >
              <Icon as={FaMapMarkerAlt} h={12} w={12} />
            </Link>
            <Text dangerouslySetInnerHTML={{ __html: organization.address }} />
            <Text>
              <Link href={`tel:${organization.phone.number}`} title="Truca'ns">
                {organization.phone.title}
              </Link>
            </Text>
            <Text>
              <Link href={`mailto:${organization.email}`} title="Escriu-nos">
                {organization.email}
              </Link>
            </Text>
            <HStack spacing={4}>
              <SocialLink
                key={1}
                item={social.instagram}
                icon={FaInstagramSquare}
              />
              <SocialLink
                key={2}
                item={social.facebook}
                icon={FaFacebookSquare}
              />
              <SocialLink key={3} item={social.linkedin} icon={FaLinkedin} />
            </HStack>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
