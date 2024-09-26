class Plant{
   
    photosynthesys(){
        console.log(`${this.constructor.name} photosynthesiszes`);
    }
}

class Tree extends Plant{
}

class Grass extends Plant{
}

class Flower extends Plant{
}

let tree = new Tree();
let grass = new Grass();
let flower = new Flower();

tree.photosynthesys();
grass.photosynthesys();
flower.photosynthesys();