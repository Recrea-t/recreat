import Cookies from "universal-cookie"

const cookies = new Cookies()
const cookieName = "gdpr-metricool"

// initializing helpers
export const initMetricool = () => {
	if (cookies.get(cookieName) === `true`) {
		window.MetricoolInitialized = true
	}
}

const checkIfMetricoolIsInitilized = () => !!window.MetricoolInitialized

export const trackVisit = (location) => {
	if (!checkIfMetricoolIsInitilized()) initMetricool();

	if (cookies.get(cookieName) === `true`) {
		window.beTracker.t({hash: `${process.env.METRICOOL_ID}`})
		console.log('tracking metricool');
	}
}

export const initializeAndTrack = (location) => {
	if (location === undefined || location === null) {
		console.error('Please provide a reach router location to the initializeAndTrack function.')
	} else {
		trackVisit(location)
	}
}
