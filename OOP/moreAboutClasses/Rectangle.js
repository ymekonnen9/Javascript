class Rectangle{
    #width;
    #height;

    constructor(width, height){
        this.#width = width;
        this.#height = height;
    }

    get width(){
        return this.#width;
    }

    get height(){
        return this.#height;
    }

    get area(){
        return this.height * this.width;
    }

    set width(value){

        if(value < 0){
            throw new RangeError("Width must be positive");
        }
        this.#width = value;
    }

    set height(value){

        if(value < 0){
            throw new RangeError("Height must be positive");
        }
        this.#height = value;
    }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); 

rect.width = 20;
console.log(rect.area); 

rect.height = 12;
console.log(rect.area); 

try {
  rect.width = 0;
} catch (e) {
  console.log(e); 
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e);
}