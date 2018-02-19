```javascript
//METODO 1
const mapStateToProps = state => ({
  status: state.reducer.status, //Now we can access to this.props.status
  items: state.reducer.items //Now we can access to this.props.items
})

//METODO 2

//reducer
export function getStatus(state) {
  return state.reducer.status;
}

export function getItems(state) {
  return state.reducer.items;
}

//Component
import {getStatus, getItems} from '../reducer/reducer.js';

...

const mapStateToProps = state => {
    const status = getStatus(state);
    const items = getItems(state);

    //Now we can access to this.props.status and this.props.items
    return {
        status,
        items
    }
}
```