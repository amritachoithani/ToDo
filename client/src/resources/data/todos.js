import {inject} from 'aurelia-framework';
import {DataServices} from './data-services';
@inject(DataServices)
export class ToDos {
  constructor(data) {
    this.data = data;
    this.TODO_SERVICE = 'todos';
    this.todosArray = [];
  }

  async save(todo) {
    if (todo) {
      let serverResponse = await this.data.post(user, this.TODO_SERVICE);
      if (! serverResponse.error) {
        this.todosArray.push(serverResponse);
      }
      return response;
    }
  }

  async getUserTodos(id) {
    let response = await this.data.get(this.TODO_SERVICE + "/" + id);
    if (!response.error && !response.message) {
      this.todosArray = response;
    }
  }

}