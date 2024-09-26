let cat = {
    move(){
        console.log("The cat is walking");
    }
}

let planet= {
    move(){
        console.log("The planet is revolving");
    }
}

for(let item of [cat, planet]){
    item.move();
}