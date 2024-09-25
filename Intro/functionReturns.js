function greeting(greet){
    return function hi(name){
        console.log(`${greet} ${name}`);
    }
}

let hi = greeting("hi");
let hello = greeting("hello");

hi("Yared");
hello("Yared");