let arr = [0,2,3,4,5]

for(let i of arr)
        console.log(i)

for(let i in arr)
    console.log(i)

let obj = {
    name:"ashutosh",
    age : "24"
}

for(let i in obj) //cannot use of
    console.log(i)

let map = new Map()

map.set("name","ashutosh")
map.set("age","24")

for(let [key,value] of map) //cannot use in 
    console.log(`${key} -> ${value}`)