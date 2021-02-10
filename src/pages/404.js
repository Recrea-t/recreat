import React from "react";
import Layout from "../components/Layout";
import { Container, Heading, Text } from "@chakra-ui/react";

const NotFoundPage = () => {
  //const pages = data.allSitePage.nodes.map(({path}) => path)
  const title = "404: Pàgina no trobada";
  const description =
    "No hem pogut trobar la pàgina que intentes veure. Pots utilitzar els enllaços del menú principal per moure't dins el web.";

  return (
    <Layout title={title} description={description}>
      <Container variant="with-top-padding">
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    allSitePage(
      filter: { path: { nin: ["/dev-404-page", "/404", "/404.html"] } }
    ) {
      nodes {
        path
      }
    }
  }
`;
