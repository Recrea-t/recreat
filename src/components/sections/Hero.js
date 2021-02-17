import React from "react";
import { Link as GatsbyLink } from "gatsby";

import { Flex, Box, Container, Text, ScaleFade } from "@chakra-ui/react";
import { MotionButton } from "../../theme/utils";

const Hero = (props) => {
  const { frontmatter } = props.data.markdownRemark;
  return (
    <Box w="full" mb={8} py={4} bg="mangoTango.500" color="white">
      <Container>
        <Flex direction="column">
          <ScaleFade in={true} initialScale={0.9}>
            <Text
              as="h1"
              fontFamily="Playfair Display"
              fontSize={{ base: "2xl", md: "6xl" }}
            >
              “{frontmatter.description}”
            </Text>
          </ScaleFade>
          <MotionButton
            as={GatsbyLink}
            to="/qui-som"
            title="Qui som?"
            variant="custom-link"
            colorScheme="white"
            alignSelf="flex-end"
            whileTap={{ scale: 0.95 }}
          >
            Saber-ne més
          </MotionButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
