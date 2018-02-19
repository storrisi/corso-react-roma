```javascript
//config/webpack.config.dev.js
// before
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
  },
},

// after
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    localIdentName: "[name]__[local]___[hash:base64:5]"  
  },
},

//config/webpack.config.prod.js
// before
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    minimize: true,
    sourceMap: true,
   },
},
// after
{
  loader: require.resolve('css-loader'),
  options: {
    importLoaders: 1,
    modules: true,
    minimize: true,
    sourceMap: true,
   },
},

//index.js
import React, { Component } from 'react';
import styles from './App.css'; //import da CSS

class App extends Component {
  render() {
    const helloWorld = 'Hello World';
    return (
    { /* className={styles.App} */ }
    <div className={styles.App}>
       <h2>{helloWorld}</h2>
    </div>);
  }
}

export default App;
```