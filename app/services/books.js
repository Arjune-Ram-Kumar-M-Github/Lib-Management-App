import Service from '@ember/service';

class Book {
  id;
  title;
  author;
  date = new Date();
  availablity = true;
  publicationDate;
  totPage;
  language;
  publisher;
  dimension;
  constructor(
    _id,
    _title,
    _author,
    _description,
    _pubDate,
    _totPage,
    _language,
    _publisher,
    _dim
  ) {
    this.id = _id;
    this.title = _title;
    this.author = _author;
    this.description = _description;
    this.publicationDate = _pubDate;
    this.totPage = _totPage;
    this.language = _language;
    this.publisher = _publisher;
    this.dimension = _dim;
  }

  get isAvailable() {
    return this.availablity;
  }

  makeAvailable() {
    this.availablity = true;
  }

  makeUnavailable() {
    this.availablity = false;
  }
}

export default class BooksService extends Service {
  books = [];

  constructor() {
    super();
    this.createBooks();
  }

  createBooks() {
    let booksData = [
      {
        id: 1,
        title: 'ABSALOM, ABSALOM!',
        author: 'WILLIAM FAULKNER',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
      {
        id: 2,
        title: 'A TIME TO KILL',
        author: 'JOHN GRISHAM',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
      {
        id: 3,
        title: 'THE HOUSE OF MIRTH ',
        author: 'EDITH WHARTON',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
      {
        id: 4,
        title: 'EAST OF EDEN',
        author: 'JOHN STEINBECK',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
      {
        id: 5,
        title: 'THE SUN ALSO RISES',
        author: 'ERNEST HEMINGWAY',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
      {
        id: 6,
        title: 'VILE BODIES',
        author: 'EVELYN WAUGH',
        description:
          'Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it.',
        publicationDate: '27 September 2017',
        totPage: 208,
        language: 'English',
        publisher: 'Hutchinson',
        dimension: '19.8 x 12.9 x 1.28 cm',
      },
    ];

    booksData.forEach(
      ({
        id,
        title,
        author,
        description,
        publicationDate,
        totPage,
        language,
        publisher,
        dimension,
      }) => {
        let newBook = new Book(
          id,
          title,
          author,
          description,
          publicationDate,
          totPage,
          language,
          publisher,
          dimension
        );
        this.books.push(newBook);
      }
    );
  }

  get allBooks() {
    return this.books;
  }
}
