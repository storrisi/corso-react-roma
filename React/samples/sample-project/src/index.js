import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './containers/App';
import history from './utils/history';
import configureStore from './store';

const store = configureStore();

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component store={store} history={history} />
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