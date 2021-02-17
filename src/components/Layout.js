import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css"; // Thin
import "@fontsource/montserrat/200.css"; // Light
import "@fontsource/montserrat/600.css"; // Semi-bold
import "@fontsource/montserrat/700.css"; // Bold
import "@fontsource/playfair-display";

import React from "react";
import useSiteMetadata from "./siteMetadata";

import { Flex } from "@chakra-ui/react";

import Header from "./sections/Header";
import Footer from "./sections/Footer";
import SEO from "./SEO/seo";

const TemplateWrapper = (props) => {
  const { title, description, image } = props;

  const { defaultTitle } = useSiteMetadata();

  return (
    <React.Fragment>
      <SEO title={title} description={description} image={image} />
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        overflow="hidden"
        minH="100vh"
        pos="relative"
      >
        <Header />
        <Flex as="main" pos="relative" w="full" pt="100px" direction="column">
          {props.children}
        </Flex>
        <Footer title={defaultTitle} />
      </Flex>
    </React.Fragment>
  );
};

export default TemplateWrapper;
