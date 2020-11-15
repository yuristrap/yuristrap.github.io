module.exports = {
  siteMetadata: {
    title: `Yuristrap`,
    description: `Yuristrap Docs`,
    author: `@kyechan99`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/docs`,
      },
    },
	{
		resolve: `gatsby-transformer-remark`,
		options: {
		  plugins: [
			{
			  resolve: `gatsby-remark-prismjs`,
			  options: {
				classPrefix: "language-",
				inlineCodeMarker: null,
				aliases: {},
				showLineNumbers: false,
				noInlineHighlight: false
			  }
			}
		  ]
		}
	  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#B897FF`,
        theme_color: `#B897FF`,
        display: `minimal-ui`,
        icon: `src/images/yuristrap-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
