import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class BooksIndexRoute extends Route {
  @service books;

  model() {
    return this.books.allBooks;
  }
}
