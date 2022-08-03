const React = require("react");

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === "production" && process.env.METRICOOL_ID) {
    return setHeadComponents([
      <script
        dangerouslySetInnerHTML={{
          __html:
            `function loadScript(a){var b=document.getElementsByTagName("head")[0],` +
            `c=document.createElement("script");c.type="text/javascript",` +
            `c.src="https://tracker.metricool.com/resources/be.js",` +
            `c.onreadystatechange=a ,c.onload=a,b.appendChild(c)}` +
            `loadScript(function(){beTracker.t({hash:"${process.env.METRICOOL_ID}"})});`,
        }}
      />,
    ]);
  }
};
