let value;

// Veri Tiplerini String'e Çevirme

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function(){console.log()});
value = String([1,2,3,4]);

value = (10).toString();
value = (3.14).toString();


// Veritiplerini Sayılara Çevirme

value = Number("123");                      // 123 - number
value = Number(null);                       // 0 - null
value = Number(undefined);                  // undefined
value = Number("Hello World");              // NaN
value = Number(function(){console.log();}); // NaN
value = Number([1,2,3,4]);                  // NaN
value = Number("3.14");                     // 3.14 - number
value = parseFloat("3.14");                 // 3.14 - float
value = parseInt("3");                      // 3 - number

console.log(value);
console.log(typeof value);


const a = "36" + 34;                        // 3634 - string
const b = Number("36") + 34;                // 70 - number

console.log(b);
console.log(typeof b);