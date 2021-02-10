import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { Box, Image, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import ServiceModal from "./ServiceModal";

const MotionBox = motion.custom(Box);

const Gallery = ({ title, exemples, isDissenyWeb }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [exampleSelected, setExampleSelected] = React.useState(null);
  const [finalRef, setFinalRef] = React.useState(null);
  const ref = React.useRef();

  const handleClick = (example, ref) => {
    setExampleSelected(example);
    setFinalRef(ref);
    onOpen();
  };

  const boxShadow = isDissenyWeb ? "" : "xs";
  //const animation = isDissenyWeb ? { opacity: 0.7 } : { scale: 1.1 };
  const animation = { opacity: 0.7 };

  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing={4} ref={ref}>
        {exemples.map((item, index) => (
          <MotionBox
            key={index}
            cursor="pointer"
            overflow="hidden"
            boxShadow={isDissenyWeb ? "xs" : "md"}
            onClick={() => handleClick(item, ref)}
            whileTap={animation}
            whileHover={animation}
          >
            <Image
              h="full"
              as={GatsbyImage}
              imgStyle={{
                objectFit: isDissenyWeb ? "contain" : "cover",
                objectPosition: "center",
              }}
              alt={item.nom}
              image={getImage(item.thumbnail)}
            />
          </MotionBox>
        ))}
      </SimpleGrid>
      <ServiceModal
        onClose={onClose}
        isOpen={isOpen}
        title={title}
        example={exampleSelected}
        finalRef={finalRef}
        boxShadow={boxShadow}
        isDissenyWeb
      />
    </>
  );
};

export default Gallery;
