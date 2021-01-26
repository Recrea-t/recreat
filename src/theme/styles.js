const styles = {
	global: {
		html: {
			scrollBehavior: "smooth",
		},
		body: {
			color: "dimGray.500",
		},
		".cookie-consent-buttons": {
			display: "flex",
			flexDirection: "column",
			alignSelf: "end",
			alignItems: "flex-end",

			button: {
				background: "transparent !important",
				textTransform: "uppercase",
				margin: "0 !important",
				padding: "0 .5rem !important",
			},
			".accept-btn": {
				fontWeight: "bold",
				color: "white !important",
			},
			".decline-btn": {
				fontSize: "2rem",
				color: "dimGray.500 !important",
			}
		}
	}
}

export default styles
