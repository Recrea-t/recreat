import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { motion } from "framer-motion";

import { Flex, Box, Container, Text, Button } from "@chakra-ui/react";

const MotionButton = motion.custom(Button);

const Hero = (props) => {
  const { frontmatter } = props.data.markdownRemark;
  return (
    <Box w="full" mb={8} py={4} bg="mangoTango.500" color="white">
      <Container>
        <Flex direction="column">
          <Text
            as="h1"
            fontFamily="Playfair Display"
            fontSize={{ base: "2xl", md: "6xl" }}
          >
            “{frontmatter.description}”
          </Text>
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
