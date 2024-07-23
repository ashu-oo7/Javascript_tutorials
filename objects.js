let obj1 = {
    name : "ashutosh yadav",
    year : "2024"
}

console.log(obj1["name"])

let obj2 = {
    DOB:"7 MAY 2001"
}
const obj = {
    ...obj1,...obj2
}
obj["Friends"] = 2
console.log(obj)

console.log(obj.hasOwnProperty("name"))

console.log(Object.keys(obj))

console.log(Object.values(obj))

console.log(Object.entries(obj))