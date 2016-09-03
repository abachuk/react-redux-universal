require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Redux Universal',
    description: 'Starting kit for React, Redux, Webpack and Server Side rendering',
    head: {
      titleTemplate: 'React Redux Universal: %s',
      meta: [
        {name: 'description', content: 'Starting kit for React, Redux, Webpack.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Universal'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'React Redux Universal'},
        {property: 'og:description', content: 'Starting kit for React, Redux, Webpack.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@abachuk'},
        {property: 'og:creator', content: '@abachuk'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
