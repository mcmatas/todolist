import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  todoList: any[] = [];
  todoListOriginal: any[] = [];
  todosRemaining: number = 0;

  updateItemsRemaining() {
    this.todosRemaining = this.todoListOriginal.filter(item => item.checked === false).length;
  }
}