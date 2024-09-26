class SmartPhones{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    batteryLevel(){
        console.log(`${this.model} has 75%`);
    }

    info(){
        return `${this.model} ${this.brand} ${this.year}`;
    }
}

let apple = new SmartPhones("Apple", "iPhone 12", 2020);
let samsung = new SmartPhones("Samsung", "Galaxy S 21", 2021);

console.log(apple.info());
samsung.batteryLevel();