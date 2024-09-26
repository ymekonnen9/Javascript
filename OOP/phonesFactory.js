function smartPhone(brand, model, year){

    return {
        brand: brand,
        model: model,
        year: year,

        batteryLevel(){
            return `${this.model} has 100`;
        },
        
        info: function(){
            return `${this.model} ${this.brand} ${this.year}`;
        }
    }

}

let apple = smartPhone("Apple", "iPhone 12", 2020);
let samsung = smartPhone("Samsung", "Galaxy S21", 2021);

console.log(apple.batteryLevel());
console.log(samsung.info());