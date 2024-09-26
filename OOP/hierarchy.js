class Parent{
    whatMethod(){
        console.log("This is in the parent class");
    }
}

class Child extends Parent{
    whatMethod(){
        console.log("This is in the child class");
        super.whatMethod();
        console.log("You get It?");
    }
}

let child1 = new Child();

child1.whatMethod();