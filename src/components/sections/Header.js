import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Box, Flex, Image, Link, useBreakpointValue } from "@chakra-ui/react";

import NavLink from "../ui/NavLink";
import ToggleMenu from "../ui/ToggleMenu";
import logo from "../../images/LogoRecreat.svg";

const Header = (props) => {
  const isSmallDevice = useBreakpointValue({ base: true, md: false });
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const MenuItems = ({ onClick }) => {
    return (
      <>
        <NavLink to="/qui-som/" onClick={onClick}>
          Qui Som
        </NavLink>
        <NavLink to="/serveis/" onClick={onClick}>
          Serveis
        </NavLink>
        <NavLink to="/#contacte" onClick={onClick} isLast>
          Contacte
        </NavLink>
      </>
    );
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      w="full"
      zIndex="1"
      bg="white"
      borderBottom="1px"
      borderBottomColor="mangoTango.500"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        wrap="wrap"
        p={4}
        color="mangoTango.500"
        {...props}
      >
        <Flex align="center">
          <Link to="/" title="Inici" as={GatsbyLink}>
            <Image src={logo} alt="Logo Recrea't" />
          </Link>
        </Flex>

        {isSmallDevice ? (
          <ToggleMenu show={show} toggleMenu={toggleMenu}>
            <MenuItems onClick={toggleMenu} />
          </ToggleMenu>
        ) : (
          <Flex
            align="center"
            direction="row"
            justify={{ md: "space-between", lg: "flex-end" }}
          >
            <MenuItems />
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
