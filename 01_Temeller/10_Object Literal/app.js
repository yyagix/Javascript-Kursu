let value;

const programmer = {
  isim: "Yağız Efe Ünal",
  yas: 16,
  email: "yagizefe@gmail.com",
  diller: ["Python", "Java", "Javascript"],

  adres: {
    sehir: "Ankara",
    ilce: "Batıkent",
  },

  calis: function () {
    console.log("Programcı Çalışıyor...");
  },
};

value = programmer;

value = programmer.email; // Genel Olarak
value = programmer["email"];

value = programmer.diller;

value = programmer.adres.sehir;

programmer.calis();

const programmers = [
  { name: "Yagiz Efe", age: 25 },
  { name: "Ünal", age: 16 },
];

value = programmers[0].name;

console.log(value);
