import React from "react";
import { motion } from "framer-motion";

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

const MotionImage = motion.custom(Image);

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
      <ModalContent bg="cultured.500">
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
                <MotionImage
                  key={index}
                  transition={{ duration: 0.3 }}
                  w="full"
                  objectFit="contain"
                  boxShadow={boxShadow}
                  alt={item.alt}
                  {...item.src.childImageSharp.fluid}
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
