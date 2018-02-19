```javascript
import {loadData} from '../actions/action.js';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadData //Now we can trigger this.props.loadData()
    },
    dispatch
  );
}
```