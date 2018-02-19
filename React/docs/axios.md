```javascript
axios
.post(url, data)
.then(function(data) {
    if (data && data.status === true) {
    res = {
        status: true
    };
    return;
    }

    res = {
    status: false,
    errCode: 500,
    errMsg: 'Generic error: ' + JSON.stringify(data)
    };
})
.catch(function(error) {
    res = {
    status: false,
    errCode: error.status,
    errMsg: (error && error.message) || errorThrown
    };
});
```