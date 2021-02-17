const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      //scrollMarginTop: "6rem",
    },
    body: {
      color: "dimGray.500",
    },
    ".with-zoom-out": {
      _hover: {
        img: {
          transform: "scale(1) !important",
        },
      },
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".markdown-detail": {
      li: {
        listStyle: "none",
        padding: ".25rem",
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
