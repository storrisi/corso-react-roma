```javascript
class App extends Component {
    
    ...

    this.handleChange = (event) => {
        this.setState({filterInput: event.target.value})
    }

    render() {
        return <div className="App">
            <input type="text" value={this.state.filterInput} onChange={this.handleChange}>
           ...

        </div>
    }
}

export default App;
```