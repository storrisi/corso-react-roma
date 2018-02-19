```javascript
import React, { Component } from 'react';
import cl from 'classnames';
import styles from './App.css';

// List of Elements
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
    render() {
        return <div className="App">
            { /* Loop per renderizzare i singoli oggetti */ }
            {list.length > 0 ? list.map(item => <div key={item.objectID}>
                <span className={cl(styles.Text, styles.Title)}>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span className={cl(styles.Text, styles.Author)}>{item.author}</span>
                <span className={cl(styles.Text, styles.Comments)}>{item.num_comments}</span>
                <span className={cl(styles.Text, styles.Points)}>{item.points}</span>
            </div>) : null}
        </div>
    }
}

export default App;
```