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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-2T0FC6J2WF", // Google Analytics / GA
                ],
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `org`,
                path: `${__dirname}/src/assets/org`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `publications`,
                path: `${__dirname}/src/assets/publications/`,
            },
        },
        "gatsby-transformer-bibtex",
    ],
};
