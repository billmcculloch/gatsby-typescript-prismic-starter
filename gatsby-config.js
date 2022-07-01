require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "Gatsby, Typescript, Prismic Starter Project",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: require("./linkResolver").linkResolver,
        schemas: {
          my_deleted_schema: {},
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
