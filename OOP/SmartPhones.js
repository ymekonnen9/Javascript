function SmartPhone(Brand, Model, Year){
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;

    this.batteryLevel = function(){
        return 100;
    }

    this.info = function(){
        console.log(`${this.Brand} ${this.Model} ${this.Year} ${this.batteryLevel()}`);
    }
}

let apple = new SmartPhone("Apple", "iPhone 12", 2020);
let samsung = new SmartPhone("Samsung", "Galaxy S21", 2021);

apple.info();
samsung.info();