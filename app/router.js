import EmberRouter from '@ember/routing/router';
import config from 'lib-management-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('books', function () {
    this.route('book', {
      path: '/:book_id',
    });
  });
  this.route('users', function () {
    this.route('user', {
      path: '/:user_id',
    });
  });
  this.route('lend-book', function () {});
  this.route('return-book', function () {});
});
