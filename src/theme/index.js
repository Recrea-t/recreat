
// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"
import typography from "./foundations/typography"

// Component style overrides
//import Button from "./components/button"
const overrides = {
	styles,
	colors,
	...typography,
	components: {
		Container: {
			baseStyle: {
				maxW: "1200px",
			},
			variants: {
				"with-border": {
					py: "2rem",
					borderTop: "1px",
					borderTopColor: "mangoTango.500",
				}
			}
		},
		Heading: {
			baseStyle: {
				mb: "2rem",
				textAlign: "center",
				fontSize: "2xl",
				fontWeight: "semibold",
				textTransform: "uppercase",
			},
			variants: {
				"in-index": {
					fontSize: "4xl",
					fontWeight: "normal",
				},
				"no-margin": {
					mb: "0",
				},
				"subtitle": {
					fontSize: "1rem",
					fontWeight: "normal",
				},
			},
		},
		Link: {
			variants: {
				"btn": {
					fontWeight: "bold",
					textTransform: "uppercase",
					_hover: {
						textDecoration: "none",
					}
				},
				"nav-link": {
					fontWeight: {md: "bold"},
					textTransform: "uppercase",
				}
			}
		},
		Button: {
			baseStyle: {
				fontWeight: "bold",
				textTransform: "uppercase",
			}
		},
	},
}

export default overrides

