class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.#title = title;
        this.#author = author;
        this.#year = year;
    }

    get title(){
        return this.#title;
    }

    get author(){
        return this.#author;
    }

    get year(){
        return this.#year;
    }

    set title(newTitle){
        this.#title = newTitle;
    }

    set author(newAuthor){
        this.#author = newAuthor;
    }

    set year(newYear){
        if(newYear < 1900){
            throw new RangeError("Year must be greater than 1900");
        }
        this.#year = newYear;
    }
}
  
  let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
  console.log(book.title);  
  console.log(book.author); 
  console.log(book.year);   
  
  book.year = 1932;         
  console.log(book.year);   
  
  try {
    book.year = 1825;
  } catch (e) {
    console.log(e);   
  }
  
  try {
    let book2 = new Book('A Tale of Two Cities', 'Charles Dickents', 1859);
  } catch (e) {
    console.log(e);   
  }