// While Döngüleri

/* let i = 0;

while(i < 10){
    console.log(i);
    i++
} */

// Break ve Continue

/* let i = 0;

while (i < 10) {
    console.log(i);
    if (i == 3 || i == 5){
        i++
        continue;
    }
    console.log(i);
    i++;
} */

//  Do While

/* let i = 0;

do {

    console.log(i);
    i++;
}while(i < 10); */

const langs = ["Python", "Javascript", "Java"];

let index = 0;

while (index < langs.length) {
  console.log(langs[index]);

  index++;
}

console.log("\n");

for (let index = 0; index < langs.length; index++) {
  console.log(langs[index]);
}

console.log("\n");

langs.forEach(function (lang, index) {
  console.log(lang, index);
});

console.log("\n");

const users = [
  { name: "Yağız", age: 16 },
  { name: "Efe", age: 18 },
  { name: "Ünal", age: 21 },
];

const names = users.map(function (user) {
  return user.name;
});

console.log(names);

console.log("\n");

const user = {
  name: "Yağız",
  age: 16,
};

for (let key in user) {
  console.log(key, user[key]);
}
