class Rectangle{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    area(){
        return this.length*this.width;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side, side);
        this.side = side;
    }
}

let square1 = new Square(6);
console.log(square1.area());