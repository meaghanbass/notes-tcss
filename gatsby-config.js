module.exports = {
  siteMetadata: {
    title: `Notes`,
    description: `Write a description here.`,
    author: `@meaghanbass_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-starter-default`,
          short_name: `starter`,
          start_url: `/`
        },
      },
    `gatsby-plugin-styled-components`,
  ],
}
