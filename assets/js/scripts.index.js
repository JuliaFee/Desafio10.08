let addBooks = [];
let addPeople = [];
class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
}

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.arrayBooks = [];
    }

    addBook(book){
        this.arrayBooks.push(book);
    }
}

const person1 = new Person("Thiago", 24);
const person2 = new Person("João", 13);
const person3 = new Person("Mariazinha", 14);

const book1 = new Book('ate o verao terminar', 'Coollen Hoover', 336);
const book2 = new Book('codigo da vinci', 'Dan Brown ', 432);
const book3 = new Book('trono de vidro', 'Sarah J. Maas', 392);
const book4 = new Book('harry potter e o prisioneiro de azkhaban', 'J.K Rowling', 288);
const book5 = new Book('it', 'Stephen King', 1104);
const book6 = new Book('extraordinario', 'R.J Palacio ', 322);

class Library{
   addPeople = [person1, person2, person3];
   addBooks = [book1, book2, book3, book4, book5, book6];
   } 

person1.addBook(book1);
person1.addBook(book3);
person2.addBook(book2);
person3.addBook(book5);

/////////////////////////////////// 

console.log('Pessoas cadastradas: ' + addPeople);

let msg = "";

console.log({person1});
person1.arrayBooks.forEach((book) => {
    msg += book.title+"; ";
}
)
console.log(`A pessoa ${person1.name} tem os livros ${msg}`);

console.log({person2});
person2.arrayBooks.forEach((book) => {
    msg = "";
    msg += book.title+"; ";
}
)
console.log(`A pessoa ${person2.name} tem os livros ${msg}`);

console.log({person3});
person3.arrayBooks.forEach((book) => {
    msg = "";
    msg += book.title+"; ";
}
)
console.log(`A pessoa ${person3.name} tem os livros ${msg}`);

const library = new Library();
console.log(library)
