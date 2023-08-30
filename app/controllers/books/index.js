import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class BooksIndexController extends Controller {
  @tracked searchBy = 'Title';
  @tracked searchValue = '';
  @tracked booksList = this.model;

  @action
  search(event)
  {
    event.preventDefault()

    if(this.searchValue != '')
    {
      if(this.searchBy == 'Title')
      {
        this.booksList = [...this.model.filter(({title}) => title.startsWith(this.searchValue.toUpperCase()))]
      }
      else
      {
        this.booksList = [...this.model.filter(({author}) => author.startsWith(this.searchValue.toUpperCase()))]
      }

    }
    else
    {
      this.booksList = this.model
    }


  }

  @action
  selectSearchOption(event)
  {
    this.searchBy = event.target.innerText
  }


}
