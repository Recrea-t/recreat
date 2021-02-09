import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import {
  Grid,
  Container,
  Text,
  Heading,
  GridItem,
  Image,
} from "@chakra-ui/react";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

import { motion } from "framer-motion";
const MotionImage = motion.custom(Image);

const PersonItem = (props) => {
  return (
    <>
      <Heading variant="no-margin">{props.nom}</Heading>
      <Heading as="h6" variant="subtitle">
        {props.subtitol}
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        rowGap={8}
        columnGap={{ md: "2rem" }}
        mb={12}
      >
        <GridItem
          pos="relative"
          _before={{
            content: "''",
            display: "block",
            pt: "100%",
          }}
        >
          <MotionImage
            shadow="md"
            transition={{ duration: 0.3 }}
            h="full"
            w="full"
            objectFit="cover"
            objectPosition="top"
            pos="absolute"
            top={0}
            alt={props.nom}
            {...props.imatge.childImageSharp.fluid}
          />
        </GridItem>

        <GridItem>
          <ReactMarkdown source={props.descripcio} />
        </GridItem>

        <GridItem
          colSpan={{ md: 2 }}
          bg="cultured.500"
          textAlign="center"
          fontSize="lg"
          p={4}
        >
          <Text textTransform="uppercase" mb={4}>
            {props.detall.titol}
          </Text>
          <Text className="markdown-detail" fontFamily="Playfair Display">
            <ReactMarkdown
              source={props.detall.descripcio}
              linkTarget="_blank"
            />
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};
const AboutPage = (props) => {
  const { frontmatter } = props.data.markdownRemark;
  const people = frontmatter.persones;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        {people.map((person, index) => (
          <PersonItem key={index} {...person} />
        ))}
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const query = graphql`
  query AboutPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        persones {
          nom
          subtitol
          imatge {
            childImageSharp {
              fluid(maxWidth: 350) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          descripcio
          detall {
            titol
            descripcio
          }
        }
      }
    }
  }
`;
