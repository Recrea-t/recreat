import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import { Container } from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "../utils/ChakraUIRenderer";

import Layout from "../components/Layout";

const GeneralPage = ({ data }) => {
  const { frontmatter, rawMarkdownBody } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container className="markdown" variant="with-top-padding">
        <ReactMarkdown
          components={ChakraUIRenderer()}
          children={rawMarkdownBody}
        />
      </Container>
    </Layout>
  );
};

GeneralPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    rawMarkdownBody: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default GeneralPage;

export const query = graphql`
  query GeneralPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      frontmatter {
        title
        description
      }
    }
  }
`;
