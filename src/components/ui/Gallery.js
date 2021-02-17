import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Image, SimpleGrid, useDisclosure } from "@chakra-ui/react";

import ServiceModal from "./ServiceModal";
import MotionBox from "../../theme/utils";

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
  const animation = isDissenyWeb
    ? { backgroundColor: "#efeff0" }
    : {
        scale: 0.95,
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)",
      };

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
              backgroundColor="transparent"
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
