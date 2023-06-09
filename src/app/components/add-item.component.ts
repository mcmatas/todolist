import { Component } from '@angular/core';
import { TodoListService } from '../services/todolist.service';

@Component({
	selector: 'add-item',
	templateUrl: '../views/add-item.html',
	styleUrls: ['../app.component.scss']
})

export class AddItemComponent{
	newTodo: string = '';
	id: number = 1;
	newObjectTodo: any;
	
	constructor(private todoListService: TodoListService) {}
  
	addTodo() {
	  if (this.newTodo.trim() !== '') {

		this.newObjectTodo = { 
			id: this.id, 
			label: this.newTodo,
			checked: false 
		};
		this.todoListService.todoList.push(this.newObjectTodo);

		this.newTodo = '';
		this.id++;
		
		this.todoListService.todosRemaining++;
	  }
	}
}