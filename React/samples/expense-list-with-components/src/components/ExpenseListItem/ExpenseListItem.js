import React from 'react';

const ExpenseListItem = ({item, updateItem, removeItem}) => <div> 
    <h1>{item.description}</h1>
    <h2>Amount: {item.amount} &euro;</h2>
    <p>{item.date}</p>
    <button onClick={() => updateItem(item.objectID)}>Update Element</button>
    <button onClick={() => removeItem(item.objectID)}>Delete Element</button>
</div>

export default ExpenseListItem;