// Fonksiyon Tanımlama

function merhaba(name = "Bilgi Yok", age = "Bilgi Yok") {
  // if(typeof name === "undefined") name = "Bilgi Yok";

  // if(typeof age === "undefined") age = "Bilgi Yok";

  console.log(`İsim: ${name} Yaş: ${age}`);
}

merhaba("Yağız", 25); // Fonksiyon Çağrısı (Function Call)
merhaba("Efe", 30);
merhaba();
merhaba("Ünal");

function square(x) {
  return x * x;

  console.log("Bu kod çalışmayacak"); // Return'dan sonraki kod çalışmaz.
}
function cube(x) {
  return x * x * x;
}

let a = cube(square(12));

console.log(a);

function naber() {
  return "Naber";
}

console.log(naber());

// Function Expression

const selam = function (name) {
  console.log("Selam " + name);
};

selam("Yağız");

// Immediately Invoked Function Expression (IIFE)

(function (name) {
  console.log("Merhaba " + name);
})("Efe");

const database = {
  host: "localhost",
  add: function () {
    console.log("Eklendi");
  },
  get: function () {
    console.log("Elde Edildi");
  },
  update: function (id) {
    console.log(`Id: ${id} Güncellendi`);
  },
  delete: function (id) {
    console.log(`Id: ${id} Silindi`);
  },
};

console.log(database.host);

database.add();

database.delete(10);
