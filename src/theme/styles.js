const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      //scrollMarginTop: "6rem",
    },
    body: {
      color: "dimGray.500",
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".markdown-detail": {
      li: {
        listStyle: "none",
      },
      a: {
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
};

export default styles;
