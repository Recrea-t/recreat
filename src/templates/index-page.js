import React from "react";
import { Link as GatsbyLink, graphql } from "gatsby";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import {
  SimpleGrid,
  Container,
  Text,
  Heading,
  Image,
  VStack,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";

const MotionButton = motion.custom(Button);

const ServiceItem = (props) => {
  const { service } = props;
  const isSmallDevice = useBreakpointValue({ base: true, md: false });

  return (
    <div
      data-sal={isSmallDevice ? "slide-right" : "zoom-in"}
      data-sal-delay="300"
      data-sal-duration="1200"
      data-sal-easing="ease-out-back"
    >
      <VStack
        p={4}
        bg="cultured.500"
        minW="310px"
        minH="450px"
        spacing={1}
        textAlign="center"
        justifyContent="space-between"
      >
        <Image
          boxSize="70px"
          mt={4}
          src={service.imatge.publicURL}
          alt={service.nom}
        />
        <Heading fontWeight="normal" textTransform="uppercase" fontSize="lg">
          {service.nom}
        </Heading>
        <Text fontFamily="Playfair Display" fontSize="2xl">
          {service.descripcio}
        </Text>
        <MotionButton
          to={`/serveis/#${service.id}`}
          title={service.nom}
          as={GatsbyLink}
          variant="custom-link"
          colorScheme="mangoTango"
          whileTap={{ scale: 0.95 }}
        >
          Veure'n més
        </MotionButton>
      </VStack>
    </div>
  );
};
const IndexPage = (props) => {
  const { frontmatter } = props.data.markdownRemark;
  const services = frontmatter.serveis;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Hero {...props} />

      <Container mb={8}>
        <Heading variant="in-index" color="dimGray.500">
          Serveis
        </Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={16}>
          {services.map((item, index) => (
            <ServiceItem key={index} service={item} />
          ))}
        </SimpleGrid>
      </Container>

      <Contact />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const query = graphql`
  query IndexPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        serveis {
          id
          nom
          descripcio
          imatge {
            publicURL
          }
        }
      }
    }
  }
`;
