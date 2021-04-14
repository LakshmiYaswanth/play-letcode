
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { AuthService } from 'src/app/service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { TodoService } from '../../service/todo.service'
@Component({
  selector: 'app-profile',
  styleUrls: ['./profile.style.scss'],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(
    private todo1: TodoService) {
    // todo.moveToDone('1. completd')
    todo1.getAllTodo();
    // console.log(a);

  }


  board: Board = new Board(`Kanban Board - Enhnace your learning`, [
    new Column('TODO', this.todo1.userAlltodos),
    new Column('DONE', [
      "Edit - Interact with inputs"
    ])
  ]);
  // todo = ;

  done = []
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(event);

  }

}
