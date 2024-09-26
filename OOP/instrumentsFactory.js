function createInstrument(name, type){

    return {
        name: name,
        type: type,

        play(){
            return `We are playing a tune on this ${this.name}`;
        },

        showType : function(){
            return `This ${this.name} is a ${this.type} instrument`;
        }
    }
}

let violin = createInstrument("Violin", "string");
let flute = createInstrument("flute", "wind");
let drum = createInstrument("drum", 'percussion');

console.log(violin.play());
console.log(flute.showType());
console.log(drum.play());