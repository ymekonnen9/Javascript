Array.prototype.forEach = function(callback){
    for(let i =0; i < this.length; i ++){
        callback(this[i]);
    }
}

array = [];

array.forEach(function callback(x){console.log(x)})