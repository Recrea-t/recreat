import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Grid,
  Container,
  Text,
  Image,
  Heading,
  GridItem,
  forwardRef,
} from "@chakra-ui/react";

import { motion, isValidMotionProp } from "framer-motion";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

const MotionGridItem = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <GridItem ref={ref} {...chakraProps} />;
  })
);

const PersonItem = (props) => {
  const image = getImage(props.imatge);

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
        <MotionGridItem
          pos="relative"
          _before={{
            content: "''",
            display: "block",
            pt: "100%",
          }}
          boxShadow="md"
          whileHover={{
            x: "-1px",
            y: "-1px",
            boxShadow:
              "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
          }}
        >
          <Image
            h="full"
            pos="absolute"
            top={0}
            as={GatsbyImage}
            imgStyle={{
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt={props.nom}
            image={image}
          />
        </MotionGridItem>

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
              gatsbyImageData(
                maxWidth: 350
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
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
