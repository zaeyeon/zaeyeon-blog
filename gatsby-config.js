module.exports = {
  siteMetadata: {
    title: `zaeyeon.log`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Namsan"],
          urls: [`${__dirname}/src/fonts/fonts.css`],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `android`,
        path: `${__dirname}/src/posts/android`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `@bonobolabs/gatsby-remark-images-custom-widths`,
          options: {
            maxWidth: 740,
          },
        },
      ],
    },
  },
  /*
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
      plugins: [
        '@bonobolabs/gatsby-remark-images-custom-widths',
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: '@bonobolabs/gatsby-remark-images-custom-widths',
          options: {
            maxWidth: 740,
            linkImagesToOriginal: false,
            quality: 80,
          }
        }
      ]
      }
    }
    */
  ],
}
