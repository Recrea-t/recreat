import React from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const ServiceDetail = ({ markdown }) => {
  return (
    <Box
      className="markdown-detail"
      bg="cultured.500"
      textAlign="center"
      fontFamily="Playfair Display"
    >
      <ReactMarkdown source={markdown} />
    </Box>
  );
};

export default ServiceDetail;
