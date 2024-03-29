import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Flex, HStack, Text, Link, StackDivider } from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      w="full"
      p={4}
      bg="dimGray.500"
      color="white"
      {...props}
    >
      <Box>
        <HStack spacing={2} divider={<StackDivider />} fontSize="xs">
          <Text>
            &copy; {new Date().getFullYear()} {props.title}
          </Text>
          <Link to="/avis-legal/" title="Avís legal" as={GatsbyLink}>
            Avís legal
          </Link>
          <Link
            to="/politica-de-proteccio-de-dades/"
            title="Política de protecció de dades personals"
            as={GatsbyLink}
          >
            Política de privacitat
          </Link>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Footer;
