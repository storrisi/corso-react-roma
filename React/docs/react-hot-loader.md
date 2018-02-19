```javascript
// config/webpack.config.dev.js
//Add 'react-hot-loader/patch' to entry array (anywhere before paths.appIndexJs). It should now look like (excluding comments):
entry: [
  'react-hot-loader/patch',
  require.resolve('react-dev-utils/webpackHotDevClient'),
  require.resolve('./polyfills'),
  paths.appIndexJs,
]


//config/webpack.config.prod.js
//Add 'react-hot-loader/babel' to Babel loader configuration. The loader should now look like:
  // Process JS with Babel.
  {
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {

      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
      plugins: [
        'react-hot-loader/babel'
      ]
    },
  },


//index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader' //Aggiungere per configurazione Hot Reloading
import App from './containers/App'

const render = Component => {
  ReactDOM.render(
    { /* Aggiungere <AppContainer /> per configurazione Hot Reloading */ }
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}
```