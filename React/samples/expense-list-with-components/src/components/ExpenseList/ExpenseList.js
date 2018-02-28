import React, { Component } from 'react';
import ExpenseListItem from '../ExpenseListItem'
import PropTypes from 'prop-types';

class ExpenseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.list || []
        })
    }

    render() {
        const {updateItem, removeItem} = this.props;
        const {list} = this.state;

        return (
            <div>
               {list.map(item => <ExpenseListItem item={item} key={item.objectID} updateItem={updateItem} removeItem={removeItem} />)} 
            </div>
        );
    }
}

ExpenseList.propTypes = {
    list: PropTypes.array,
    updateItem: PropTypes.func,
    removeItem: PropTypes.func
}

export default ExpenseList;