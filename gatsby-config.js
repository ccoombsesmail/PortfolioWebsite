module.exports = {
  siteMetadata: {
    title: `Charles Coombs-Esmail`,
    description: `Portfolio Website`,
    author: `@cccoombsesmail`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
