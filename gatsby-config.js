// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// });

require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keyeCNm0CxJwGQmay`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            apiKey: `keyeCNm0CxJwGQmay`,
            baseId: `appAwQlz2JETRL4Os`,
            tableName: `TestTable`,
            // tableView: `YOUR_TABLE_VIEW_NAME`, // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
            // mapping: { `CASE_SENSITIVE_COLUMN_NAME`: `VALUE_FORMAT` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          },
          {
            baseId: `appAwQlz2JETRL4Os`,
            tableName: `TestTable`,
            // tableView: `YOUR_TABLE_VIEW_NAME` // optional
            // can leave off queryName, mapping or tableLinks if not needed
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: process.env.DATO_API_TOKEN,
  
        // The project environment to read from. Defaults to the primary environment:
        // environment: `master`,
  
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
  
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
  
        // Custom API base URL (most don't need this)
        apiUrl: 'https://site-api.datocms.com',
  
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        // localeFallbacks: {
        //   it: ['en'],
        // },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
