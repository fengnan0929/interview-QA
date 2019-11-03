### Promise.race
```javascript
const promiseRace = arr => {
    return new Promise((resolve) => {
        arr.forEach(promise => {
            Promise.resolve(promise).then((res) => {
                resolve(res);
                return;
            })
        })
    })
};
```