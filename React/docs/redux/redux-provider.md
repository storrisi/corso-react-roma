```javascript
import {Provider} from 'react-redux';
import store from '../../store';

export default class App extends Component {
    render() {
        return <Provider store={store}>
            <Router>
                ....
            </Router>
        </Provider>
    }
}
```