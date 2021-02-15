import React from "react";
import { Box } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

const ServiceDetail = ({ markdown }) => {
  return (
    <Box
      className="markdown-detail"
      bg="cultured.500"
      boxShadow="sm"
      textAlign="center"
      fontFamily="Playfair Display"
      p={4}
    >
      <ReactMarkdown source={markdown} />
    </Box>
  );
};

export default ServiceDetail;
