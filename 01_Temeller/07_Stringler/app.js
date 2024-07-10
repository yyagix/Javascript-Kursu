let value;

const firstName = "Yağız";
const lastName = "Efe";

const langs = "Java, Python, C++";

value = firstName + lastName;

value = firstName + " " + lastName;

value = "Yağız ";

value += "Efe"; //value = value + "Efe"

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Ünal"); // firstName + " " + "Ünal"

value = firstName.toLocaleLowerCase(); // yağız

value = firstName.toUpperCase(); // YAĞIZ

value = firstName[0]; // 0. index'te hangi karakter varsa onu verir = Y
value = firstName[2];
value = firstName[4];

value = firstName[firstName.length - 1]; // 5 harften son harfi yazdırır = z

// Index Of - Harflerin Kaçıncı indexte olduğunu yazar.

value = firstName.indexOf("Y");
value = firstName.indexOf("ı");
value = firstName.indexOf("y"); // Olmadığı için -1

// Char At - Index'i çağırır

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// Split - Virgülle ayrılan yazıları seçme.

value = langs.split(",");

// Replace - Metin değiştirme.

value = langs.replace("Python", "CSS");

// Includes - Sorgulama yapar.

value = langs.includes("Java"); // True
value = langs.includes("123"); // False

console.log(value);
