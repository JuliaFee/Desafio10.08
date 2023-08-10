
console.log("entrou")
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
        console.log(`A pessoa ${this.name} pegou emprestado o livro ${book.title}`)
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
   addBooks = [book1, book2, book3, book4, book5,book6 ];
}

console.log({person1})

person1.addBook(book1);
person1.addBook(book3);
person2.addBook(book2);
person3.addBook(book5);

console.log({person1});
console.log({person2});
console.log({person3});

let msg = "";

person1.arrayBooks.forEach((book) => {
    msg += book.title+", ";
}
)
console.log(`A pessoa ${person1} tem os livros ${msg}`)


