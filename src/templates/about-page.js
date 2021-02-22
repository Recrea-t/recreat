import React, { useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Grid,
  Container,
  Text,
  Heading,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { MotionGridItem, motionRevealConfig } from "../theme/utils";

import ReactMarkdown from "react-markdown";

import Layout from "../components/Layout";

const PersonItem = (props) => {
  const image = getImage(props.imatge);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
          boxShadow="md"
        >
          <Image
            h="full"
            w="full"
            pos="absolute"
            top={0}
            as={GatsbyImage}
            className="with-zoom-out"
            loading={props.isFirst ? "eager" : "lazy"}
            imgStyle={{
              objectPosition: "top",
              transform: "scale(1.2)",
            }}
            alt={props.nom}
            image={image}
          />
        </GridItem>

        <GridItem>
          <ReactMarkdown source={props.descripcio} />
        </GridItem>

        <MotionGridItem
          colSpan={{ md: 2 }}
          bg="cultured.500"
          boxShadow="sm"
          textAlign="center"
          fontSize="lg"
          p={4}
          ref={ref}
          {...motionRevealConfig(controls, "left")}
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
        </MotionGridItem>
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
          <PersonItem key={index} isFirst={index === 0} {...person} />
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
                width: 350
                placeholder: TRACED_SVG
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
