export default {
	baseStyle: {
		boxShadow: "none",
		_focus: {
			boxShadow: "none",
			textDecoration: "underline",
		},
	},
	variants: {
		"nav-link": {
			fontWeight: {md: "bold"},
			textTransform: "uppercase",
		},
		"in-modal": {
			fontWeight: "bold",
			color: "mangoTango.500"
		},
	},
}
