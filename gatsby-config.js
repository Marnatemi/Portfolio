module.exports = {
  pathPrefix: '/Portfolio',
  siteMetadata: {
    title: 'Marlena Czerwińska',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/atoms/styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
