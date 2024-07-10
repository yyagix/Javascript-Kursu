let value;

const value1 = 10;

const value2 = 4;


// Aritmetik Operatorler

// İşlemler
value = value1 + value2;                        // 14
value = value1 - value2;                        // 6
value = value1 * value2;                        // 40
value = value1 / value2;                        // 2
value = value1 % value2;                        // 2


// Pi ve E sayıları
value = Math.PI;                                // 3.141592653589793
value = Math.E;                                 // 2.718281828459045


// Yuvarlama

value = Math.round(3.6);                        // 4
value = Math.round(3.5);                        // 4
value = Math.round(3.3);                        // 3


// Bir Üst Sayıya Yuvarlama
value = Math.ceil(3.2);                         // 4
value = Math.ceil(3.7);                         // 4


// Bir Alt Sayıya Yuvarlama
value = Math.floor(3.2);                        // 3
value = Math.floor(3.7);                        // 3


// Karekök Alma
value = Math.sqrt(16);                          // 4
value = Math.sqrt(31);                          // 5.5677643628300215


// Mutlak Değer
value = Math.abs(-10);                          // 10


// Üs Alma
value = Math.pow(8,3);                          // 512
value = Math.pow(4,2);                          // 16


// Max ve Min Metotu
value = Math.max(10,-1,100,32);                 // 100
value = Math.min(10,-1,100,32);                 // -1


// Rastgele Sayı Üretme
value = Math.random();                          // 0 - 100 arasında random sayı üretir.
value = Math.random() * 20;                     // 0 - 20 arasında random sayı üretir.
value = Math.random() * 20 + 1;                 // 1 - 20 arasında random sayı üretir(1 dahil değil).
value = Math.floor(Math.random() * 20 + 1);     // 1 - 20 arasında random sayı üretir(1 dahil).

// Konsola Yazdırma
console.log(value);