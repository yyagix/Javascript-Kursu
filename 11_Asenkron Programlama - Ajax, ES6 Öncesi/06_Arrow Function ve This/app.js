const person = {
    age: 25,

    /*
    tellAge: function () {

        // This - Person

        console.log(this);
        console.log(this.age);
    }.bind(this)
    */

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }



    // This - Window
}


person.tellAge();