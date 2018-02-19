```javascript
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({
  name: 'MyApp'
});

const loggerMiddleware = createLogger({predicate: (getState, action) => true})

export default function store(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
```