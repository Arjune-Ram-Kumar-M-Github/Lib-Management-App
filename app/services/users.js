import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { setOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

class User {
  id;
  username;
  @tracked userTakenBooksId = [];
  joinedDate = new Date();

  constructor(_id, _username) {
    this.id = _id;
    this.username = _username;
  }

  get userBooks() {
    return this.userTakenBooksId;
  }

  noOfBooksTaken() {
    this.userTakenBooksId.length;
  }
}

export default class UsersService extends Service {
  @service books;
  users = [];

  constructor(owner) {
    super(owner);
    setOwner(this, owner);
    this.addUsers();
  }

  get allUsers() {
    return this.users;
  }

  addUsers() {
    let usersData = [
      {
        id: 1,
        username: 'Sam',
      },
      {
        id: 2,
        username: 'Ram',
      },
      {
        id: 3,
        username: 'Kishore',
      },
    ];

    usersData.forEach(({ id, username }) => {
      let newUser = new User(id, username);
      this.users.push(newUser);
    });
  }

  addBook(userId, bookId) {
    let user = this.users.find(({ id }) => id == userId);
    let book = this.books.allBooks.find(({ id }) => id == bookId);

    user.userBooks.push({
      id: book.id,
      bookName: book.title,
      date: new Date(),
    });
    book.makeUnavailable();
  }

  removeBook(userId, bookId) {
    let user = this.users.find(({ id }) => id == userId);
    let book = this.books.allBooks.find(({ id }) => id == bookId);

    let bookIndex = user.userBooks.indexOf(
      user.userBooks.find(({ id }) => id == bookId)
    );

    user.userBooks.splice(bookIndex, 1);

    book.makeAvailable();
  }
}
