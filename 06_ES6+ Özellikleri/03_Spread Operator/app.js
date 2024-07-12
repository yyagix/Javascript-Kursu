// Spread Operator
/*
const langs = ["Python","C++","Java","Php"];

// console.log(langs[0],langs[1],langs[2],langs[3]);

console.log(...langs);

// const langs2 = ["Javascript","C#",langs[0],langs[1],langs[2],langs[3]];

const langs2 = ["Javascript","C#",...langs];

console.log(langs2);
*/

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b] = numbers;

console.log(a,b);       // 1 2

const [c,d,...e] = numbers;

console.log(c,d,e);     // 3 4 [5,6,7,8,9]