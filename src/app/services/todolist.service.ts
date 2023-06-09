import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  todoList: any[] = [];
  todoListOriginal: any[] = [];
  todosRemaining: number = 0;
}