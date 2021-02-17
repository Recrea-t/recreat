import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link as GatsbyLink } from "gatsby";

import { Text, Heading, Image } from "@chakra-ui/react";
import {
  motionRevealConfig,
  MotionButton,
  MotionVStack,
} from "../../theme/utils";

const ServiceCard = (props) => {
  const { service } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <MotionVStack
      ref={ref}
      p={4}
      bg="cultured.500"
      boxShadow="sm"
      minW="310px"
      minH="450px"
      spacing={1}
      textAlign="center"
      justifyContent="space-between"
      {...motionRevealConfig(controls)}
    >
      <Image
        boxSize="70px"
        mt={4}
        src={service.imatge.publicURL}
        alt={service.nom}
      />
      <Heading fontWeight="normal" textTransform="uppercase" fontSize="lg">
        {service.nom}
      </Heading>
      <Text fontFamily="Playfair Display" fontSize="2xl">
        {service.descripcio}
      </Text>
      <MotionButton
        to={`/serveis/#${service.id}`}
        title={service.nom}
        as={GatsbyLink}
        variant="custom-link"
        colorScheme="mangoTango"
        whileTap={{ scale: 0.95 }}
      >
        Veure'n més
      </MotionButton>
    </MotionVStack>
  );
};

export default ServiceCard;
