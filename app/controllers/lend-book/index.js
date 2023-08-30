import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import { reads } from '@ember/object/computed';
// import { setOwner } from '@ember/application';
export default class LendBookIndexController extends Controller {
  @service users;
  @service router;

  userId;
  bookId;

  @action
  updateBook(event) {
    this.bookId = event.target.value;
  }

  @action
  updateUser(event) {
    this.userId = event.target.value;
  }

  @action
  register() {
    this.userId = this.userId ? this.userId : this.model.users[0].id;
    this.bookId = this.bookId ? this.bookId : this.model.books[0].id;

    this.users.addBook(this.userId, this.bookId);

    this.router.transitionTo('users.user', this.userId);

    this.userId = null;
    this.bookId = null;
  }
}
