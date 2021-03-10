const config = require('@deadline/common/data/config');

module.exports = {
  siteMetadata: {
    site_url: config.url,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `../common/static/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Cairo',
          'Roboto:300,400,500,400i,700',
          'Frank Ruhl Libre:300,400,500,700',
          'DM Sans:400,400i,500,500i,700,700i',
          'Lato',
          'Comfortaa:300,400,500,600,700',
          'Playfair Display',
          'Anton',
          'Abril Fatface',
          'Montserrat:700',
          'DM Sans:500,700',
          'Roboto:400,500',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.favicon,
      },
    },
  ],
};
