let value;

const numbers = [43,56,33,23,44,35,5];
// const numbers = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "Java", "C++", "Javascript"];

const a = ["Merhaba", 22, null, undefined, 3.14];

value = numbers.length;

// Indexleme
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length-1];


// Index'teki değerleri değiştirme.

numbers[2] = 1000;
value = numbers;


// Index Of

value = numbers.indexOf(1000);


// Array Sonuna Değer Ekleme

numbers.push(2000);
value = numbers;


// Array Başına Değer Ekleme

numbers.unshift(3000);
value = numbers;


// Array Sonundan Değer Silme

numbers.pop();
value = numbers;


// Array Başından Değer Silme

numbers.shift();
value = numbers;


// İstediğimiz Değerleri Silme

// Belli bir indexten belli bir indexe kadar olan değerleri silme
numbers.splice(0,3)
value = numbers;


// Array Terse Çevirme

numbers.reverse();
value = numbers;


// Array Sıralama

numbers.sort(); // İlk rakama bakarak sıralar
value = numbers;

value = numbers.sort(function(x,y){    // Küçükten Büyüğe Sıralama
    return x-y;
})


value = numbers.sort(function(x,y){    // Büyükten Küçüğe Sıralama
    return y-x;
})

console.log(value);