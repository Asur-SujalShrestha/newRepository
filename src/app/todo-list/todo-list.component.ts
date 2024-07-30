import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  tasks: {
    name: String
    done: boolean
  }[]=[]
  onSubmit(taskForm:NgForm){
    if(taskForm.valid){
      this.tasks.push({
        name:taskForm.value.todo,
        done:false
      })
      taskForm.reset()
        
      }
    }

    onDelete(index:number){
      this.tasks.splice(index);
    }

    
    
  }


