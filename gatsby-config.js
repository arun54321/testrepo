/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
*/
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}


const settings = require("./src/util/site.json")

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          netlifyCmsPaths,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              withWebp: true,
              loading: "lazy",
              quality: 75,
              backgroundColor: 'transparent',
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `netlify-cms-app`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: settings.ga,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Good Mimmy`,
        short_name: `Good mimmy`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#e3bb5f`,
        display: `standalone`,
        icon: `static/assets/dog.png`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Kaushan Script`,
            variants: [`400`],
          },
          {
            family: `Permanent Marker`,
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
  ],
}
