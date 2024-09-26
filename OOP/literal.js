let Student = {
    name: 'Yared',
    age: 18,

    study: function(){
        console.log(`${Student.name} is studying`);
    },

    pass(){
        console.log(`${this.name} has passed this course`);
    }
}

Student.pass();