import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Image,
  SimpleGrid,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import ServiceModal from "./ServiceModal";

const MotionImage = motion.custom(Image);

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
  const animation = isDissenyWeb ? { opacity: 0.7 } : { scale: 1.1 };

  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing={4} ref={ref}>
        {exemples.map((item, index) => (
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
            onClick={() => handleClick(item, ref)}
          >
            <Tooltip label={item.nom} bg="mangoTango.500" hasArrow>
              <MotionImage
                pos="absolute"
                top={0}
                left={0}
                bottom={0}
                h="full"
                w="full"
                objectPosition="center"
                objectFit={isDissenyWeb ? "contain" : "cover"}
                whileTap={animation}
                whileHover={animation}
                transition={{ duration: 0.3 }}
                alt={item.nom}
                {...item.thumbnail.childImageSharp.fluid}
              />
            </Tooltip>
          </Box>
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
