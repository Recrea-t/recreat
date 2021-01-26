const React = require("react")

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
	console.log('render body')
	setHeadComponents([
		<script
			key="metricool-js"
			type="text/javascript"
			src="https://tracker.metricool.com/resources/be.js" />
		//<script
		//key={`gatsby-plugin-metricool`}
		//dangerouslySetInnerHTML={{
		//__html:
		//`function loadScript(a){var b=document.getElementsByTagName("head")[0],` +
		//`c=document.createElement("script");c.type="text/javascript",` +
		//`c.src="https://tracker.metricool.com/resources/be.js",` +
		//`c.onreadystatechange=a ,c.onload=a,b.appendChild(c)}`
		//}}
		///>
	]);
};
