// Destructing
/*
let number1, number2;

arr = [100,200,300,400];

// Eski Yöntem

number1 = arr[0];
number2 = arr[1];


// Destructing
[number1, number2] = arr;

// Daha Kısa Tanımlama
const [number3, number4] = arr;

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number4);


// Object Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1,b:number2,c:number3} = numbers;

console.log(number1,number2,number3);


// Function Destructing

const getLangs = () => ["Python", "JavaScript", "Java"];

const [lang1, lang2, lang3] = getLangs();

console.log(lang1, lang2, lang3);
*/

// Obje

const person = {
    name: "Yağız Efe",
    year: 2000,
    salary: 30000,
    showInfos: () => console.log("Bilgiler Gösteriliyor...")
};

const {name:isim, year:yıl, salary:maas, showInfos:bilgileriGoster} = person;

console.log(isim, yıl, maas);
bilgileriGoster();