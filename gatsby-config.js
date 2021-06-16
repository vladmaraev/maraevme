module.exports = {
  siteMetadata: {
    title: "Vladislav Maraev",
  },
  plugins: [
      "gatsby-plugin-sass",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-orga`,
      {
	  resolve: "gatsby-plugin-google-analytics",
	  options: {
              trackingId: "UA-64561587-1",
	  },
      },
      {
	  resolve: `gatsby-source-filesystem`,
	  options: {
	      name: `documents`,
	      path: `${__dirname}/src/assets/publications`,
	  },
      },
      {
	  resolve: `gatsby-source-filesystem`,
	  options: {
	      name: `org`,
	      path: `${__dirname}/src/assets/org`,
	  },
      },
      'gatsby-transformer-bibtex',
  ],
};
