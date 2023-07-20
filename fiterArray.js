/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function greaterThan10(n){
    n > 10 ? true : false
}

function firstIndex(n, i) {
    i === 0 ? true : false
}

function plusOne(n){
    n + 1 === 0 ? false : true
}

var filter = function(arr, fn) {
    const newarr = arr.filter((each, idx)=> fn(each, idx))
    return newarr;
};
const arr1 = [0,10,20,30]
const arr2 = [-2,-1,0,1,2]
const arr3 = [1,2,3]
console.log(filter(arr1, greaterThan10))
console.log(filter(arr3, firstIndex))
console.log(filter(arr2, plusOne))
