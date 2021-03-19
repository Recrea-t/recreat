const styles = {
  global: {
    html: {
      //scrollBehavior: "smooth",
    },
    body: {
      color: "dimGray.500",
    },
    ".with-zoom-out": {
      _hover: {
        boxShadow: "inner",
        img: {
          transform: "scale(1) !important",
          transition: "1s !important",
        },
      },
    },
    ".with-box-shadow": {
      _hover: {
        boxShadow: "dark-lg",
        transform: "scale(0.95)",
      },
    },
    ".markdown": {
      li: {
        margin: "0 !important",
      },
    },
    ".markdown-description": {
      ul: {
        paddingLeft: "1rem",
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
