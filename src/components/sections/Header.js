import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {Box, Flex, Text, Image, Link} from "@chakra-ui/react"
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons"

import logo from '../../images/LogoRecreat.svg'

const MenuItems = (props) => {
	const {children, isLast, to = "/", ...rest} = props
	return (
		<Text
			mb={{base: isLast ? 0 : 8, sm: 0}}
			mr={{base: 0, sm: isLast ? 0 : 8}}
			display="block"
			{...rest}
		>
			<Link to={to} title={children} as={GatsbyLink} variant="nav-link">{children}</Link>
		</Text>
	)
}

const Header = (props) => {
	const [show, setShow] = React.useState(false)
	const toggleMenu = () => setShow(!show)

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

				<Box display={{base: "block", md: "none"}} onClick={toggleMenu} >
					{show ? <CloseIcon w={8} h={8} /> : <HamburgerIcon w={8} h={8} />}
				</Box>

				<Box
					display={{base: show ? "block" : "none", md: "block"}}
					flexBasis={{base: "100%", md: "auto"}}
				>
					<Flex
						align={["center", "center", "center", "center"]}
						justify={["center", "space-between", "flex-end", "flex-end"]}
						direction={["column", "row", "row", "row"]}
						pt={[4, 4, 0, 0]}
					>
						<MenuItems to="/qui-som">Qui Som</MenuItems>
						<MenuItems to="/serveis">Serveis</MenuItems>
						<MenuItems to="/#contacte" isLast>Contacte</MenuItems>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}

export default Header

