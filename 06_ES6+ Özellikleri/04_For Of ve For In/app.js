const person = {
    name: "Yağız Efe",
    age: 23,
    salary: 10000,
};

const langs = ["JavaScript", "Python", "C#"];

const name = "Yağız";

// For In

for(let prop in person) {
    console.log(prop,person[prop]);
}

// For Of

for(let lang of langs) {
    console.log(lang);
}