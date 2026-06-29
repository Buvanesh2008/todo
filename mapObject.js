let map = new Map();

map.set('Name',"Buvanesh") //map.set(key,value)
map.set('Age',17) .set(3,595) //adding multiple data

console.log(map.get(2)) //get() is used to access the data in map object

console.log(map.has(2)) // has() checks if a value is mapped for a particular key

console.log(map.size) //size is a property that returns the size of a map object

console.log()

for(key of map.keys()){
    console.log(key)
}

console.log()

for(key of map.values()){
    console.log(key)
}

console.log()

for(key of map){
    console.log(key)
}

console.log()

map.delete(3) // delete() deletes a particular key and its value
console.log(map)

map.clear() //clear() completely clears the map object
console.log(map)