## 函数式编程 compose

实现以下功能：
```js
compose([a, b, c])('参数')
=>
a( b( c('参数') ) )
```

```js
 // compose([a,b,c]) => return a(cb(()))(参数)
function compose(...array){
    let end = array.pop();
    return  function(args){
        let res = end(args);
        while(array.length>0){
            res = array.pop()(res);
        }
        return res;
    }
}
```