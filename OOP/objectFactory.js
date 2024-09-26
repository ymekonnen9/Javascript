function Fruits(name, color){
    
    return {
        name: name,
        color: color,

        isRipe(){
            return `This ${this.name} is ripe.`;
        },

        describe(){
            return `This ${this.name} is ${this.color}`;
        }

    }
}

let apple = Fruits("Apple", "Red");
let banana = Fruits("Banana", "Yellow");
let blackberry = Fruits("Blackberry", "Black");

console.log(apple.isRipe());
console.log(banana.describe());
console.log(blackberry.isRipe());