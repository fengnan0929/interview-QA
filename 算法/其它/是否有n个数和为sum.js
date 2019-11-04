/**
* 返回数组是否有n个数的和为sum
* @returns Boolean
*/

function nsum(arr, n, sum) {
    
    if (n > arr.length) {
        return false;
    }
    if (n === 1) {
        return arr.includes(sum);
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            let str = arr.slice(i + 1);
            return nsum(str, n - 1, sum - arr[i]) || nsum(str, n, sum);
        }
    }
}