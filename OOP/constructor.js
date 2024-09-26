function Cat(name){
    this.name = name;

    this.meow = function(){
        console.log("Meow");
    }

    this.purr = function(){
        console.log("Purr");
    }
}

let cat1 = new Cat("Yared");
cat1.purr();
cat1.meow();