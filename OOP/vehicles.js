class Vehicle{
    constructor(color, weight){
        this.color = color;
        this.weight = weight;
    }

    accelerate(){
        console.log(`This Vehicle is ACCELERATING`);
    }
    

    decelerate(){
        console.log(`This Vehicle is DECELERATING`);
    }
}

class Car extends Vehicle{
    constructor(color, weight, license){
        super(color, weight);
        this.license = license;
    }

    honk(){
        console.log(`This Car is honking`);
    }
}

class Boat extends Vehicle{
    constructor(color, weight, home_port){
        super(color, weight);
        this.home_port = home_port;
    }

    drop_anchor(){
        console.log(`This boat is anchoring`)
    }
}

class Plane extends Vehicle{
    constructor(color, weight, airline_name){
        super(color, weight);
        this.airline_name = airline_name;
    }

    takeoff(){
        console.log(`${this.airline_name} is takingoff`);
    }

    land(){
        console.log(`${this.airline_name} is landing`);
    }
}

let car = new Car("Red", 500, 321654987);
let boat = new Boat("white", 1000, 645455);
let plane = new Plane("Black", 900000, "Ethiopian Airline");

car.accelerate();
car.honk();

boat.drop_anchor();

plane.land();