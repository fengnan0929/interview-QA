## 实现 flatten 函数
```js
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
```

### 迭代版

```js
/**
* 扁平化数组
* @returns array
*/
    
function flat(arr, depth = 1) {
        if (Number.isNaN(depth) || depth <= 1) {
            return arr;
        }
        let curdep = 1, res = [];

        function iter(arr, depth, curdep) {
            arr.forEach((item) => {
                if (Array.isArray(item) && (curdep < depth)) {
                    iter(item, depth, curdep + 1);
                }
                else {
                    res.push(item);
                }
            });
            return res;
        }

        return iter(arr, depth, curdep);
    }
```