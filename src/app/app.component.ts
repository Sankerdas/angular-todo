import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    todoArray = [];

  addToDO(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }

  deleteItem(todo) {
    console.log(todo);
    for (let i = 0; i<= this.todoArray.length; i++) {
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }
    }

    }

}
