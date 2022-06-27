import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo:string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }

  toggleDone(id:number){
    this.todos?.map((value,i)=>{
      if(i == id) value.completed = !value.completed;
      return value;
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos?.filter((v,i) => i !== id); 
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = ""
  }
}
