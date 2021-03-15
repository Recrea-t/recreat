import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Image,
  SimpleGrid,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import ServiceModal from "./ServiceModal";

const Gallery = ({ title, exemples, isDissenyWeb }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [exampleSelected, setExampleSelected] = React.useState(null);
  const ref = React.useRef();

  const handleClick = (example) => {
    setExampleSelected(example);
    onOpen();
  };

  const boxShadow = isDissenyWeb ? "" : "xs";

  const isSmallDevice = useBreakpointValue({ base: true, md: false });
  const loading = isDissenyWeb || isSmallDevice ? "lazy" : "eager";

  return (
    <>
      <SimpleGrid columns={[1, null, 3]} spacing={4} ref={ref}>
        {exemples.map((item, index) => (
          <Image
            key={index}
            cursor="pointer"
            overflow="hidden"
            boxShadow={isDissenyWeb ? "xs" : "md"}
            onClick={() => handleClick(item)}
            as={GatsbyImage}
            loading={loading}
            backgroundColor="transparent"
            className="with-box-shadow"
            imgStyle={{
              objectFit: isDissenyWeb ? "contain" : "cover",
              objectPosition: "center",
            }}
            alt={item.nom}
            image={getImage(item.thumbnail)}
          />
        ))}
      </SimpleGrid>
      <ServiceModal
        onClose={onClose}
        isOpen={isOpen}
        title={title}
        example={exampleSelected}
        finalRef={ref}
        boxShadow={boxShadow}
        isDissenyWeb
      />
    </>
  );
};

export default Gallery;
