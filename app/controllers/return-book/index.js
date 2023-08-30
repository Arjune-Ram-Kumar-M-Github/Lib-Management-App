import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class ReturnBookIndexController extends Controller {
  @service users;
  @service router;
  @tracked userId;
  @tracked userData;
  @tracked showBookDetails = false;
  @action
  updateUserId(event) {
    this.userId = event.target.value;
    this.showBookDetails = !this.showBookDetails;
  }

  @action
  showDetails() {
    this.userId = this.userId ? this.userId : this.model[0].id;
    this.userData = this.model.find(({ id }) => id == this.userId);
    this.showBookDetails = !this.showBookDetails;
  }

  @action
  removeSelectedBook(bookId) {
    this.users.removeBook(this.userId, bookId);
    this.router.transitionTo('/');
  }
}
