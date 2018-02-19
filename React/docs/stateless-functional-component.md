```javascript
const Search = ({ value, onChange, children }) => {
    // do something
    return ( <form>
        {children}
        <input
            type="text"
            value={value}
            onChange={onChange}
    /> </form>
    );
}
```