const React = require("react")

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
	if (process.env.NODE_ENV === 'production') {
		setHeadComponents([
			<script
				key="metricool-js"
				type="text/javascript"
				src="https://tracker.metricool.com/resources/be.js" />
		]);
	}
};
