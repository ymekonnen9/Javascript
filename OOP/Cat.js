class Cat{
    constructor(name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;
    }

    speak(){
        console.log(
            `Meow, I am ${this.name} ` +
            `I am a ${this.age}-year-old ${this.color} cat.`
        );
    }
}

let cocoa = new Cat("cocoa", "black", 5);
let leo = new Cat("Leo", "Orange", 3);

cocoa.speak();

leo.speak();

console.log(cocoa instanceof Cat);