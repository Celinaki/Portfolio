// support for .env, .env.development, and .env.production

require("dotenv").config()

require("dotenv").config({

  path: `.env.${process.env.NODE_ENV}`,

})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },

  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
     
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};

