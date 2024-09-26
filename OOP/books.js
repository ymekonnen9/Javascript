function Books(Title, Author, Year){
    this.Title = Title;
    this.Author = Author;
    this.Year = Year;

    this.speak = function(){
        console.log("speaking");
    }
}

let book1 = new Books("Neuromancer", "William Gibson", 1984);
let book2 = new Books("Doomsday Book", "Connie Willis", 1992);

book1.speak();
console.log(book1 instanceof Books);