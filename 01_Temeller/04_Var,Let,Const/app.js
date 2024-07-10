// Var - Değişkeni istediğin zaman değiştir.

var ad = "Yağız Efe";

console.log(ad);

ad = "Ünal";

console.log(ad);

// Let - let a; tek bir kere yazılabilir ikinci let a; hata verir.

let a, b;

a = 10;
b = 20;

console.log(a + b);

// Const - Tekrar değiştirilemez.

const name = "Yağız Efe";

console.log(name);

/* 
name = "Ünal"; // Hata verir.

console.log(name); 
*/

// Const'ta değişken aynı satırda tanımlanması gerekiyor.

/*

const a; // Burada değer ata.

a = 10; //Hata verir aynı saatır olmalı.

console.log();

*/

const z = [1, 2, 3, 4, 5];

console.log(z);

// z = [1,2,3,4,5,6] -Yapılamaz push() kodu ile eklenir.

z.push(6);

console.log(z);
