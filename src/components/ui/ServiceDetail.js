import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useInView } from "react-intersection-observer";

import MotionBox, { EASINGS } from "../../theme/utils";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: EASINGS.easeInOutBack },
  },
  hidden: { opacity: 0, x: -200 },
};

const ServiceDetail = ({ markdown }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <MotionBox
      className="markdown-detail"
      bg="cultured.500"
      boxShadow="sm"
      textAlign="center"
      fontFamily="Playfair Display"
      p={4}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <ReactMarkdown source={markdown} />
    </MotionBox>
  );
};

export default ServiceDetail;
