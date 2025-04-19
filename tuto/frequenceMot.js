class Book {
  constructor(titre, nbrePage) {
    this.titre = titre;
    this.nbrePage = nbrePage;
    this._page = 1;
  }

  get page() {
    return this._page;
  }

  nextPage() {
    if (this._page < this.nbrePage) {
      this._page++;
    }
  }

  close() {
    this._page = 1;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addBooks(books) {
    for (let book of books) {
      this.books.push(book);
    }
  }

  findBooksByLetter(letter) {
    const booksFound = this.books.filter((book) =>
      book.titre.toLowerCase().startsWith(letter.toLowerCase())
    );

    for (let book of booksFound) {
      console.log(book.titre);
    }
  }
}

const b = new Book("Le Seigneur des anneaux", 200);
console.log(b.page);
b.nextPage();
console.log(b.page);
b.close();
console.log(b.page);

const l = new Library();
l.addBook(b);
l.addBooks([
  new Book("Ready player one", 100),
  new Book("Oui-oui", 10),
  new Book("Sillage", 50),
  new Book("Sea Lion", 20),
]);

l.findBooksByLetter("S");
