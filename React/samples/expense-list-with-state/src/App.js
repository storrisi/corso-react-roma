import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    description: 'Expense 1 Description',
    date: '11/01/2018 18:00',
    amount: 11,
    objectID: 1,
  }, {
    description: 'Expense 2 Description',
    date: '15/01/2018 18:00',
    amount: 22,
    objectID: 0,
  }
];

const newElement = {
  description: 'New Expense Description',
  date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
  amount: 10,
  objectID: 0,
}

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {list}
  }

  removeItem = (id) => {
      const updatedList = this.state.list.filter(item => item.objectID !== id);
      this.setState({list: updatedList});
  }

  completeItem = (id) => {
      const updatedList = Object.assign([], this.state.list.map(item => {
              if (item.objectID === id) {
                  item.completed = !item.completed;
              }
              return item;
          })
      );
      this.setState({list: updatedList});
  }

  addElement = () => {
      const updatedList = Object.assign([], this.state.list);
      updatedList.unshift(Object.assign({}, newElement, {objectID: (updatedList[0].objectID*1) + 1}));
      console.log(updatedList);
      
      this.setState({list: updatedList});
  }

  render() {
      const {list, totalAmount} = this.state;
      
      return <div className="App">
        <p>There are {list.length} expenses</p>
        <p>The total amount of the expenses is {list.reduce((previous, next) => previous + next.amount, 0)}</p>
        <button onClick={() => this.addElement()}>Add New Element</button>
         {list.length > 0 ? list.map(item => <div key={item.objectID}> 
              <h1>{item.description}</h1>
              <h2>Amount: {item.amount} &euro;</h2>
              <p>{item.date}</p>
              <button onClick={() => this.removeItem(item.objectID)}>Delete Element</button>
          </div>) : null}
      </div>
  }
}

export default App;
