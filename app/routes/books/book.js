import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksBookRoute extends Route {
  @service books;

  model(params) {
    let { book_id } = params;
    return this.books.allBooks.find(({ id }) => id == book_id);
  }
}
