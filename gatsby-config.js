require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'Safdar Jamal',
    title: 'RDA Toronto',
    description:
      'A minimal blogging site built with Gatsby using Contentful and hosted on Netlify.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '414adc83-9818-4f86-8523-f8d730e054bd',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false, // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
