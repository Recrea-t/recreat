const React = require("react")

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
	console.log('render body')
	setHeadComponents([
		<script
			key="metricool-js"
			type="text/javascript"
			src="https://tracker.metricool.com/resources/be.js" />
	]);
};
