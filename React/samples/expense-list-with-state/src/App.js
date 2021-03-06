import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddForm from './containers/AddForm';

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

const ExpenseRender = ({item, updateItem}) => <div> 
    <h1>{item.description}</h1>
    <h2>Amount: {item.amount} &euro;</h2>
    <p>{item.date}</p>
    <button onClick={() => updateItem(item.objectID)}>Update Element</button>
    <button onClick={() => this.removeItem(item.objectID)}>Delete Element</button>
</div>

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {list, filterInput: '', filteredList: list}
  }

  updateItem = (id) => {
    this.setState({updatingItem: id});
  }

  removeItem = (id) => {
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({list: updatedList});
  }

  addElement = (newElement) => {
      console.log(newElement);
      const updatedList = Object.assign([], this.state.list);
      if (updatedList.length > 0) {
        updatedList.unshift(Object.assign({}, newElement, {objectID: (updatedList[0].objectID*1) + 1}));
      } else {
        updatedList.push(newElement);
      }
      
      this.setState({list: updatedList});
  }

  handleFilter = (event) => {
    this.setState({filterInput: event.target.value, filteredList: this.state.list.filter(item => this.filterByText(item, event.target.value))})
  }

  filterByText = (item,value) => item.description.toLowerCase().includes(value.toLowerCase())

  renderList = (elements) => elements.map(item => <ExpenseRender item={item} key={item.objectID} updateItem={this.updateItem} />);

  render() {
      const {list, totalAmount, filterInput, filteredList, updatingItem} = this.state;
      
      return <div className="App">
        <input type="text" value={filterInput} onChange={this.handleFilter} placeholder="Filter data by text" />
        <p>There are {list.length} expenses</p>
        <p>The total amount of the expenses is {list.reduce((previous, next) => previous + next.amount, 0)}</p>

        <AddForm addElement={this.addElement} updatingItem = {list.find(item => item.objectID === updatingItem)} />
        {filterInput !== '' ? this.renderList(filteredList) : this.renderList(list) }
      </div>
  }
}

export default App;
