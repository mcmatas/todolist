import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';

import { TodoListService } from './services/todolist.service';
import { AppComponent } from './app.component';
import { AddItemComponent } from './components/add-item.component';
import { ListTodoComponent } from './components/list-todo.component';
import { StatusTodoComponent } from './components/status-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ListTodoComponent,
    StatusTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    MatListModule
  ],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
