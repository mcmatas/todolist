import { Component } from '@angular/core';
import { TodoListService } from '../services/todolist.service';

@Component({
	selector: 'status-todo',
	templateUrl: '../views/status-todo.html',
	styleUrls: ['../app.component.scss']
})

export class StatusTodoComponent{
	
	constructor(public todoListService: TodoListService) {
		this.todoListService.todoListOriginal = this.todoListService.todoList;
	}

	showAll() {
		this.todoListService.todoList = this.todoListService.todoListOriginal
	}

	showActive() {
		this.todoListService.todoList = this.todoListService.todoListOriginal.filter(item => item.checked === false);
	}

	showCompleted() {
		this.todoListService.todoList = this.todoListService.todoListOriginal.filter(item => item.checked === true);
	}

}