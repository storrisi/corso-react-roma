import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

const list = [
  {
    objectID: 1,
    description: 'Description 1',
    date: '20/02/2018',
    amount: 10,
    notes: 'Test Notes'
  },
  {
    objectID: 2,
    description: 'Description 2',
    date: '20/02/2018',
    amount: 11,
    notes: 'Test Notes'
  },
  {
    objectID: 3,
    description: 'Description 3',
    date: '20/02/2018',
    amount: 12,
    notes: 'Test Notes'
  }
];

const ExpenseRender = ({item}) => <div>
  <h1>{item.description}</h1>
  <h2>{item.date}</h2>
  <h2>{item.amount} &euro;</h2>
  <p>{item.notes}</p>
</div>

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>The total number of item is {list.length}</p>
        <p>The total amount of expenses is {list.reduce((previous, next) => previous + next.amount, 0)} &euro;</p>
        {list && list.lenght > 0 ? list.map(item => 
          <ExpenseRender item = {item}  key={item.objectID} />
        ) : <p>Nessun elemento presente</p>}
      </div>
    );
  }
}

export default App;
