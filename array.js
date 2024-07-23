let arr1 = [1,2,3,4]
arr1.push(5)
console.log(arr1)
arr1.pop();
console.log(arr1)

arr1.unshift(0)
console.log(arr1)

arr1.shift()
console.log(arr1)

let arr2 = [5,6,7]

arr = [...arr1,...arr2]

console.log(arr)
