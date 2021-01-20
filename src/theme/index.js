
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
	},
}

export default overrides

