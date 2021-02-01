import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";

import {
  Grid,
  VStack,
  Container,
  Text,
  Heading,
  Image,
  Wrap,
  WrapItem,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Link,
} from "@chakra-ui/react";

import Layout from "../components/Layout";

const MotionImage = motion.custom(Image);

const ServiceModal = (props) => {
  const { isOpen, onClose, service, example, finalRef } = props;
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
              {example.descripcio || service}
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
              <MotionImage
                key={index}
                transition={{ duration: 0.3 }}
                w="full"
                objectFit="contain"
                alt={example.nom}
                {...item.childImageSharp.fluid}
              />
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const ServiceItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [exampleSelected, setExampleSelected] = React.useState(null);
  const [finalRef, setFinalRef] = React.useState(null);
  const ref = React.useRef();

  const handleClick = (example, ref) => {
    setExampleSelected(example);
    setFinalRef(ref);
    onOpen();
  };

  const isDissenyWeb = props.id === "disseny-web";
  const isXarxesSocials = props.id === "xarxes-socials";

  return (
    <>
      <Heading id={props.id}>{props.nom}</Heading>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)" }}
        rowGap={8}
        columnGap={{ lg: "2rem" }}
        mb={8}
      >
        <GridItem colSpan={isXarxesSocials ? 3 : 2}>
          <Box mb={4}>
            <ReactMarkdown source={props.descripcio} />
          </Box>

          {!isXarxesSocials && (
            <Box
              className="service-detail"
              bg="cultured.500"
              textAlign="center"
              fontFamily="Playfair Display"
            >
              <ReactMarkdown source={props.detall} />
            </Box>
          )}
        </GridItem>

        <GridItem colSpan={isXarxesSocials ? 3 : 4}>
          {isXarxesSocials ? (
            <VStack spacing={4} textAlign="center" fontSize="xl">
              <Text textTransform="uppercase">
                Com gestionem les comunitats en línia?
              </Text>
              <Wrap direction="column" fontFamily="Playfair Display" w="full">
                {props.passes.map((item, index) => (
                  <WrapItem
                    key={index}
                    pos="relative"
                    bg="cultured.500"
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
          ) : (
            <SimpleGrid columns={[1, null, 3]} spacing={4} ref={ref}>
              {props.exemples.map((example, index) => (
                <Box
                  key={index}
                  pos="relative"
                  _before={{
                    content: "''",
                    display: "block",
                    pt: "75%",
                  }}
                  cursor="pointer"
                  overflow="hidden"
                  boxShadow={isDissenyWeb ? "xs" : "md"}
                  onClick={() => handleClick(example, ref)}
                >
                  <MotionImage
                    transition={{ duration: 0.3 }}
                    whileHover={
                      isDissenyWeb ? { opacity: 0.7 } : { scale: 1.1 }
                    }
                    whileTap={isDissenyWeb ? { opacity: 0.7 } : { scale: 1.1 }}
                    h="full"
                    w="full"
                    objectFit={isDissenyWeb ? "contain" : "cover"}
                    objectPosition="center"
                    pos="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    alt={example.nom}
                    bg="white"
                    {...example.thumbnail.childImageSharp.fluid}
                  />
                </Box>
              ))}
            </SimpleGrid>
          )}
        </GridItem>
        <ServiceModal
          onClose={onClose}
          isOpen={isOpen}
          service={props.nom}
          example={exampleSelected}
          finalRef={finalRef}
        />
      </Grid>
    </>
  );
};
const ServicesPage = (props) => {
  const { frontmatter } = props.data.markdownRemark;
  const services = frontmatter.serveis;

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      <Container variant="with-top-padding">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </Container>
    </Layout>
  );
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    html: PropTypes.object,
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
      html
      frontmatter {
        title
        description
        serveis {
          id
          nom
          descripcio
          detall
          exemples {
            nom
            descripcio
            any
            url
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imatges {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
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
