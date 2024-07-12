// Maps - Key(Anahtar) - Value(Değer)

let myMap = new Map();  //Oluşturma

console.log(typeof myMap);

const key1 = "Yağız";
const key2 = {a:10,b:20};
const key3 = () => 2;

// Set

myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

// Get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

// Map Size

console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

console.log(cities);

// For Each

cities.forEach(function(value,key){
    console.log(key,value);
})

// For Of

for(let [key,value] of cities){
    console.log(value);
}

// Map Keys

for(let key of cities.keys()){
    console.log(key);
}

// Map Values

for(let value of cities.values()){
    console.log(value);
}


// Arraylerden Map Oluşturma
const arr = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);

// Maplarden Array Oluşturma

const sehirler = new Map();

sehirler.set("Ankara",5);
sehirler.set("İstanbul",15);
sehirler.set("İzmir",4);

const array = Array.from(sehirler);

console.log(array);