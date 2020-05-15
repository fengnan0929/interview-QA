### Promise.race
```javascript
const promiseRace = arr => {
    return new Promise((resolve,reject) => {
        arr.forEach(promise => {
            Promise.resolve(promise).then((res) => {
                resolve(res);
                return;
            })
        })
    }).catch((err)=>reject(err));
};
```


