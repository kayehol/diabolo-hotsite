module.exports = {
  siteMetadata: {
    title: `Pré-Venda Diabolo`,
    description: `Nove contos compõem este livro, em que sempre se manifesta alguma perda irremediável, principalmente a da inocência.`,
    author: `Kayê Holanda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
    },/*
    {
      resolve: "@pasdo501/gatsby-source-woocommerce",
      options: {
        api: 'trajeseditora.com.br',
        https: true,
        api_keys: {
          consumer_key: 'ck_d2285126cdef2b7bc9fe5cb6a6a1e57b891b14bb',
          consumer_secret: 'cs_5759d2636aac0db5a153fdf0c59496c6cafd9381',
        },
        fields: [`products`, `products/categories`, `products/attributes`, `payment_gateways`],
      }
    }*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
