const config = require("./site-config.json");

console.log(config);

module.exports = {
  siteMetadata: config,
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    //"gatsby-plugin-preact",
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        isUsingColorMode: false,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-preload-fonts",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Recrea't`,
        short_name: `Recrea't`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#E8864B`,
        display: `minimal-ui`,
        icon: "static/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
        //cache_busting_mode: "none",
      },
    },
    // The offline plugin must be listed after the manifest plugin
    //"gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-offline",
    //resolve: "gatsby-plugin-offline",
    //options: {
    //workboxConfig: {
    //globPatterns: ["**/icon-path*"],
    //},
    //},
    //},
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1380,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        htmlTitle: "Gestor de continguts · Recrea't",
        htmlFavicon: "static/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
  ],
};
