// Karşılaştırma Operatorleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2 == 2);
console.log("js" == "Javasript");

console.log(2 == "2"); // ikisini de string olarak alır.
console.log(2 === "2"); // === değerleri kontor eder.

console.log(4 > 2);
console.log(2 > 4);

console.log(2 != 4);
console.log(4 < 2);

console.log(4 >= 2);
console.log(4 >= 4);

console.log(4 <= 4);

// Mantıksal Bağlaçlar

// Not Operatoru

console.log(!(2 == 2));

// And Operatoru

console.log(2 == 2 && "Ahmet" == "Ahmet");

// Or Operatoru

console.log(4 == 2 || "Ahmet" != "Ahmet");

// If Operatoru

const error = false;

if (error == true) {
  //If Block
  console.log("Hata Oluştu!");
} else {
  //Else Block
  console.log("Hata Oluşmadı.");
}

const user = "ygz";

if (user === "efe") {
  console.log("Kullanıcı Bulundu.");
} else {
  console.log("Kullanıcı Bulunmadı.");
}

const process = "2";

if (process === "1") {
  console.log("İşlem 1");
} else if (process === "2") {
  console.log("İşlem 2");
} else if (process === "3") {
  console.log("İşlem 3");
} else if (process === "4") {
  console.log("İşlem 4");
} else {
  console.log("Geçersiz İşlem");
}

const number = 100;

if (number == 100) {
  console.log("Sayı 100'e Eşit");
} else {
  console.log("Sayı 100'e Eşit Değil");
}

// Ternary Operator

console.log(number === 100 ? "Sayı 100" : "Sayı 100 Değil!");

// Sadece ifte tek bir işlem varsa süslü paranteze gerek yoktur!
if (number === 100) console.log("Sayı 100");
