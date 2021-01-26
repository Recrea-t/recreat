import {mode} from "@chakra-ui/theme-tools"

function variantCustomLink(props) {
	const {colorScheme: c} = props
	const color = mode(`${c}.500`, `${c}.200`)(props)

	return {
		padding: 0,
		height: "auto",
		lineHeight: "normal",
		color: color,
		_hover: {
			textDecoration: "none",
			color: mode(`${c}.600`, `${c}.300`)(props),
			bg: "transparent",
			_disabled: {
				color: color,
				textDecoration: "none",
			},
		},
		_focus: {
			outline: 0,
			color: mode(`${c}.500`, `${c}.400`)(props),
		},
		_active: {
			color: mode(`${c}.700`, `${c}.400`)(props),
		},
	}
}

export default {
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
	},
	variants: {
		"custom-link": variantCustomLink,
	},
}
