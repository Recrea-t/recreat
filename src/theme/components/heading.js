export default {
  baseStyle: {
    mb: "2rem",
    textAlign: "center",
    fontSize: "2xl",
    fontWeight: "semibold",
    textTransform: "uppercase",
    _before: {
      display: "block",
      content: "''",
      marginTop: "-7rem",
      height: "7rem",
      visibility: "hidden",
      pointerEvents: "none",
    },
  },
  variants: {
    "in-index": {
      fontSize: "4xl",
      fontWeight: "normal",
    },
    "no-margin": {
      mb: "0",
    },
    subtitle: {
      fontSize: "1rem",
      fontWeight: "normal",
    },
    "in-modal": {
      fontSize: "1rem",
      fontWeight: "normal",
      textTransform: "none",
      mb: "0",
    },
  },
};
