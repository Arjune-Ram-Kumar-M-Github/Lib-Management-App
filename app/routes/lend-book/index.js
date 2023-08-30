import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class LendBookIndexRoute extends Route {
  @service books;
  @service users;

  model() {
    let availableBooks = this.findAvailableBooks();

    return RSVP.hash({
      books: availableBooks,
      users: this.users.allUsers,
    }).then((result) => {
      return result;
    });
  }

  findAvailableBooks() {
    let availableBooks = [];

    for (let book of this.books.allBooks) {
      if (book.isAvailable) {
        availableBooks.push(book);
      }
    }

    return availableBooks;
  }
}
