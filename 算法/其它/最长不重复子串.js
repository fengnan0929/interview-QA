 /**
 * 最长不重复子串（双指针）
 * @returns array
 */

function longestNorepeatString1(str) {
    let i = 0, j = 1;
    let max = 0;
    while (i < str.length && j < str.length) {
        let str1 = str.substring(i, j);
        if (str1.indexOf(str[j]) === -1) {
            j++;
            max = Math.max(max, j - i);
        }
        else {
            str1.slice(1);
            i++;
        }
    }
    return max;
}