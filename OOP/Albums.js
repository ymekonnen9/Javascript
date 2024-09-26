function Albums(Title, Artist, Year){
    this.Artist = Artist;
    this.Year = Year;
    this.Title = Title;
}

let album1 = new Albums("Thriller", "Michael Jackson",1982);
let album2 = new Albums("The Dark Side of the Moon", "Pink Floyd",1973);

console.log(album1);