import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class UsersIndexRoute extends Route {
  @service users;

  model() {
    return this.users.allUsers;
  }
}
