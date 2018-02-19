```javascript
import cl from 'classnames';

render() {
    return <div classNames={cl(s.MainClass, s.SubClass, ifCondition ? s.SubSubClass : null)}>
}
```