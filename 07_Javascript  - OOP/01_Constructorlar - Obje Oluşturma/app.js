/* console.log(this);      // Global Scope

const emp1 = {          // Object Literal
    name:"Yağız",
    age:25,
    showInfos: function(){
        console.log("Bilgiler Gösteriliyor");
    }
};

const emp2 = {
    name:"Ünal",
    age:25
};

emp1.salary = 4000;
emp1.showInfos();

console.log(emp1); */


function Employee(name, age, salary){        // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Yağız", 25, 4000);
const emp2 = new Employee("Ünal", 25, 5000);

emp1.showInfos();