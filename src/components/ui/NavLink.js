import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion.custom(Text);

const NavLink = (props) => {
  const { children, onClick, isLast, to = "/", ...rest } = props;

  const isPartiallyActive = (props) => {
    return props.isPartiallyCurrent ? { style: { color: "#63656A" } } : {};
  };

  return (
    <MotionText
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      <Link
        to={to}
        title={children}
        as={GatsbyLink}
        variant="nav-link"
        getProps={isPartiallyActive}
        onClick={onClick}
      >
        {children}
      </Link>
    </MotionText>
  );
};

export default NavLink;
