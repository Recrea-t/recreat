const styles = {
	global: {
		html: {
			scrollBehavior: "smooth",
			//scrollMarginTop: "6rem",
		},
		body: {
			color: "dimGray.500",
		},
		".markdown": {
			li: {
				margin: "0 !important",
			},
		},
		".service-detail": {
			li: {
				listStyle: "none",
			},
		},
		".cookie-consent-buttons": {
			display: "flex",
			flexDirection: "column",
			justifyItems: "flex-end",
			alignItems: "flex-end",
			width: "100%",
			height: "100%",

			button: {
				textTransform: "uppercase",
				color: "#efeff0 !important",
				background: "transparent !important",
				_hover: {
					color: "#D6D6D9 !important",
				}
			},
			".accept-btn": {
				fontWeight: "bold",
			},
			".decline-btn": {
				position: "absolute",
				top: "0",
				right: "0",
				fontSize: "2.5rem",
				margin: "0 !important",
				padding: "0 .5rem !important",
			}
		}
	}
}

export default styles
