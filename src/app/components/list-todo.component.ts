import { Component } from '@angular/core';
import { TodoListService } from '../services/todolist.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
	selector: 'list-todo',
	templateUrl: '../views/list-todo.html',
	styleUrls: ['../app.component.scss']
})

export class ListTodoComponent {
	

	constructor(public todoListService: TodoListService) { }

	toggleCheckbox(todo: any) {
		// Lógica para cambiar el estado del checkbox
		todo.checked = !todo.checked;

		this.todoListService.updateItemsRemaining();
	}

	removeTodo(todo: any) {
		let indexToRemove = this.todoListService.todoList.findIndex(item => item.id === todo.id);
		this.todoListService.todoList.splice(indexToRemove, 1);

		this.todoListService.updateItemsRemaining();
	}

	removeCompleted() {
		this.todoListService.todoListOriginal = this.todoListService.todoListOriginal.filter(item => item.checked === false);
		this.todoListService.todoList = this.todoListService.todoListOriginal;

		this.todoListService.updateItemsRemaining();
	}

	onDrop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.todoListService.todoList, event.previousIndex, event.currentIndex);
	}
}