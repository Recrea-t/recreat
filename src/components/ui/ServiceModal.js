import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  VStack,
  Heading,
  Image,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";

const ServiceModal = (props) => {
  const { isOpen, onClose, finalRef, title, example, boxShadow } = props;
  const initialRef = React.useRef();

  if (!example) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      scrollBehavior="inside"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="cultured.500" h="min-content">
        <ModalCloseButton
          colorScheme="dimGray"
          variant="custom-link"
          _focus={{ outline: 0 }}
        />
        <ModalBody>
          <VStack textAlign="center" spacing={1} ref={initialRef}>
            <Heading
              variant="in-modal"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              {example.descripcio || title}
            </Heading>
            <Heading as="h6" variant="in-modal">
              {example.nom}
            </Heading>
            <Heading as="h6" variant="in-modal">
              {example.any}
            </Heading>
            <Link
              variant="in-modal"
              href={`http://${example.url}`}
              title={example.nom}
              target="_blank"
              rel="noopener"
              isExternal
            >
              {example.url}
            </Link>
            {example.imatges.map((item, index) => (
              <Box py={4}>
                <Image
                  key={index}
                  boxShadow={boxShadow}
                  as={GatsbyImage}
                  imgStyle={{
                    objectFit: "contain",
                  }}
                  alt={item.nom || item.alt}
                  image={getImage(item.src)}
                />
                {item.alt && <Text>{item.alt}</Text>}
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ServiceModal;
