import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TodoService {


  

  constructor(private db: AngularFireDatabase,
    private user: AuthService) { }
  // get all the todos and list in todo
  userAlltodos = [];
  public getAllTodo() {
    this.db.list('alltodos').snapshotChanges().forEach(s => {
      s.forEach(sn => {
        let a = sn.payload.toJSON();
        console.log(a);
        this.userAlltodos.push(a)
      })
    })
  }

  showInTodo() {
    console.log(this.userAlltodos);
  }


  //move to done
  moveToDone(name: string) {
    this.user.getUser().subscribe(
      user => {
        if (user) {
          const uid = user.uid;
          this.db.object(`users/${uid}/todo/`)
            .set({
              status: 1,
              name: name
            }).then(() => {
              // alert('completed')
            })
        }
      }
    )
  }
  // show all the done form firestore
  putInDone() {

  }



}
