import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import Contact from "../components/sections/Contact";
import ServiceCard from "../components/ui/ServiceCard";

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
            <ServiceCard key={index} service={item} />
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
