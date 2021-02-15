import React from "react";

import { VStack, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

const SocialNetworks = ({ passes }) => {
  return (
    <VStack spacing={4} textAlign="center" fontSize="xl">
      <Text textTransform="uppercase">
        Com gestionem les comunitats en línia?
      </Text>
      <Wrap direction="column" fontFamily="Playfair Display" w="full">
        {passes.map((item, index) => (
          <WrapItem
            key={index}
            pos="relative"
            bg="cultured.500"
            boxShadow="sm"
            m={4}
            px={4}
            pb={4}
            pt={6}
          >
            <Image
              pos="absolute"
              top={-6}
              left="50%"
              w={10}
              ml={-5}
              objectFit="contain"
              src={item.imatge.publicURL}
              alt={item.text}
            />
            <Text w="full">{item.text}</Text>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default SocialNetworks;
