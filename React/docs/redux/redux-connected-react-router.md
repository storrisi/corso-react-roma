```javascript
//STEP 1
//store.js
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {
    connectRouter,
    routerMiddleware
  } from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers';
import history from './utils/history';

const composeEnhancers = composeWithDevTools({
  name: 'MyApp'
});

const loggerMiddleware = createLogger({predicate: (getState, action) => true})

export default function store(preloadedState) {
  const store = createStore(
    connectRouter(history)(rootReducer), //History e Stato vengono connessi
    preloadedState,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware,
            routerMiddleware(history)
        )
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(connectRouter(history)(rootReducer));
    });
  }

  return store;
}

//STEP2
//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './containers/App';

//history e store vengono importati e inizializzati dalla index
import history from './utils/history';
import configureStore from './store';

const store = configureStore();

const render = Component => {
    ReactDOM.render(
      <AppContainer>
        {/*history e store vengono passati come proprietà al componente principale*/}
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


//STEP3
//App.js
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
...
render() {
    //history e props vengono ricevuti come proprietà
    const {history, store} = this.props;
    
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
            <Switch>
            ....
            </Switch>
            </ConnectedRouter>
        </Provider>
    )
}
...
```