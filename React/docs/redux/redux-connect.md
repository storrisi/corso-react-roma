```javascript
import {connect} from 'react-redux'; //Import lib connect from redux
import {bindActionCreators} from 'redux';
import {loadData} from '../actions/action.js';
import {getStatus, getItems} from '../reducer/reducer.js';

....

const mapStateToProps = state => {
    const status = getStatus(state);
    const items = getItems(state);

    return {
        status,
        items
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadData
    },
    dispatch
  );
}

//Putting all togheter
export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```