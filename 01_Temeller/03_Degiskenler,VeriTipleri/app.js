// Değişken Oluşturmma

var a = 20;
var b = 10;
var c = 40;

console.log(a,b,c,);


// Primitive Veri Tipleri

var a = 10;   // Number Veri Tipi
var b = 3.14; // Number Veri Tipi


// String

var name = "Yağız"; // String Veri Tipi
console.log(name);  // String Veri Tipi

// Boolean

var a = true;  // Boolean Veri Tipi
var b = false; // Boolean Veri Tipi

console.log(typeof a);


// Null Object

var a = null;

console.log(a);  // Null

console.log(typeof a);


// Undefined - Tanımsız

var a;

console.log(a); // Console de undefined çıktısı çıkar.


// Referance Veri Tipleri


//Array List

var numbers = [1,2,3,4,5];

console.log(numbers);
console.log(typeof numbers); // Object
console.log(numbers[0]);

// Array Örnek

var person = {
    name: "Yağız Efe",
    age: 25
}

console.log(person);
console.log(typeof person);


// Date Object

var date = new Date();

console.log(date);

console.log(typeof date); // Date Veri Tipi


// Fonksiyonlar

var merhaba = function(){
    console.log("Merhaba");
}

console.log(merhaba);
console.log(typeof merhaba); //Function Veri Tipi



// İlkel ve Referans Veri Tiplerini Karşılaştırma

// İlkel Veri Tipi

var a = 10;

var b = a;

console.log(a,b);  //10 10

a = 20;

console.log(a,b);  //20 10


// Referans Veri Tipi

var a = [1,2,3];

var b = a;

a.push(4);

console.log(b);