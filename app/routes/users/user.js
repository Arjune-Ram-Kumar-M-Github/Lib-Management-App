import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class UsersUserRoute extends Route {
  @service users;

  model(params) {
    let { user_id } = params;

    return this.users.allUsers.find(({ id }) => id == user_id);
  }
}
