import React from "react"
import {Link as GatsbyLink} from "gatsby"
import {Text, Link} from "@chakra-ui/react"

const NavLink = (props) => {
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

export default NavLink
