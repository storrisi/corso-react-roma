import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {PrivateRoute} from '../../utils/routes';

import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import {Provider} from 'react-redux';

import {ConnectedRouter} from 'connected-react-router';

import s from './App.css';
import cl from 'classnames';



const NotFoundPage = () => {
    return (
        <h1>Page Not Found</h1>
    )
}

class App extends Component {
  render() {
    const {store, history} = this.props;
    
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className={cl(s.App)}>
                    <header><h1>Expense Tracker</h1></header>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;