```javascript
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Hello World';
    return (
    { /* Attributo 'className' equivale a HTML 'class' */}
    <div className="App">
       <h2>{helloWorld}</h2>
    </div>);
  } 
}

export default App;
```