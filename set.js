let set = new Set()//does not allow duplicates

set.add("Buvanesh").add(17);

console.log(set.has(17))

console.log(set.size);


for(i of set){
    console.log(i)
}

set.delete(17)

console.log(set)

console.log(set.clear())

console.log(set)

