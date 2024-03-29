import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "../utils/ChakraUIRenderer";

import { Grid, GridItem, Box, Container, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";

import ServiceDetail from "../components/ui/ServiceDetail";
import SocialNetworks from "../components/sections/SocialNetworks";
import Gallery from "../components/ui/Gallery";

const ServiceItem = (props) => {
  const isDissenyWeb = props.serviceId === "disseny-web";
  const isXarxesSocials = props.serviceId === "xarxes-socials";

  return (
    <>
      <Heading id={props.serviceId}>{props.title}</Heading>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }}
        rowGap={8}
        columnGap={{ lg: "2rem" }}
        mb={8}
      >
        <GridItem colSpan={isXarxesSocials ? 3 : 2}>
          <Box mb={4} className="markdown-description">
            <ReactMarkdown
              components={ChakraUIRenderer()}
              children={props.descripcio}
            />
          </Box>

          {!isXarxesSocials && <ServiceDetail markdown={props.detall} />}
        </GridItem>

        <GridItem colSpan={isXarxesSocials ? 3 : 4}>
          {isXarxesSocials ? (
            <SocialNetworks passes={props.passes} />
          ) : (
            <Gallery {...props} isDissenyWeb={isDissenyWeb} />
          )}
        </GridItem>
      </Grid>
    </>
  );
};

const ServicesPage = (props) => {
  const { frontmatter } = props.data.markdownRemark;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        <ServiceItem
          serviceId="disseny-grafic"
          title="Disseny Gràfic"
          {...frontmatter.dissenyGrafic}
        />
        <ServiceItem
          serviceId="disseny-web"
          title="Disseny Web"
          {...frontmatter.dissenyWeb}
        />
        <ServiceItem
          serviceId="xarxes-socials"
          title="Xarxes Socials"
          {...frontmatter.xarxesSocials}
        />
      </Container>
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ServicesPage;

export const query = graphql`
  query ServicesPageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        dissenyGrafic {
          descripcio
          detall
          exemples {
            nom
            descripcio
            any
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            imatges {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    width: 385
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        dissenyWeb {
          descripcio
          detall
          exemples {
            nom
            any
            url
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 350
                  placeholder: TRACED_SVG
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            imatges {
              alt
              src {
                childImageSharp {
                  gatsbyImageData(
                    width: 385
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
        xarxesSocials {
          descripcio
          passes {
            text
            imatge {
              publicURL
            }
          }
        }
      }
    }
  }
`;
