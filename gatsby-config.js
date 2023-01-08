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
     
      "accessToken": "ys9O_j-BCqgBlF0H0EVm3nS-TbKQ3aThuPa5rfCL4og",
      "spaceId": "z1k44gi1i1qf"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};
