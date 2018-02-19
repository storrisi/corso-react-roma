```javascript
import React, { Component } from 'react';
import './App.css';

const list = [
    {
      title: 'React',
      url: 'https://facebook.github.io/react/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
  }, {
      title: 'Redux',
      url: 'https://github.com/reactjs/redux',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
  }, ];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {list} //Inizializzazione dello stato iniziale
    }

    removeItem = (id) => {
        const updatedList = this.state.list.filter(item => item.objectID !== id);
        this.setState({list: updatedList});  //Modifica dello stato a fronte di una variazione
    }

    render() {
        const {list} = this.state; //Recupero list da stato corrente

        return <div className="App">
           {list.length > 0 ? list.map(item => <div key={item.objectID}>
                <span>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <button onClick={() => this.removeItem(item.objectID)}>Remove</button>
            </div>) : null}
        </div>
    }
}

export default App;
```