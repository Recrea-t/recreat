import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { useInView } from "react-intersection-observer";

import MotionBox, { motionRevealConfig } from "../../theme/utils";

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
      {...motionRevealConfig(controls)}
    >
      <ReactMarkdown children={markdown} />
    </MotionBox>
  );
};

export default ServiceDetail;
