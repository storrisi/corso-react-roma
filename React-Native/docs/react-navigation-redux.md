```javascript
//Navigator
import { StackNavigator } from 'react-navigation';
export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

//navigation reducer
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../utils/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'Login':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
        );
        break;
        case 'Logout':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Login' }),
            state
        );
        break;
        default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    return nextState || state;
}




//App.js
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

```