import React, { Component } from 'react';
import './App.css';
import AddForm from '../../components/AddForm';
import ReportBar from '../../components/ReportBar';
import SearchBar from '../../components/SearchBar';
import ExpenseList from '../../components/ExpenseList';

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

  renderList = (elements) => <ExpenseList list={elements} updateItem={this.updateItem} removeItem={this.removeItem} />;

  render() {
      const {list, totalAmount, filterInput, filteredList, updatingItem} = this.state;

      return <div className="App">
        <SearchBar filterInput={filterInput} handleFilter={this.handleFilter} />
        <ReportBar totalItems={list.length} handleClick={this.handleClick} totalAmount={list.reduce((previous, next) => previous + next.amount, 0)} />

        <AddForm addElement={this.addElement} updatingItem = {list.find(item => item.objectID === updatingItem)} />
        {filterInput !== '' ? this.renderList(filteredList) : this.renderList(list) }
      </div>
  }
}

export default App;
