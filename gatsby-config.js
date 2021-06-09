module.exports = {
  siteMetadata: {
    title: "Vladislav Maraev",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-64561587-1",
      },
    },
  ],
};
