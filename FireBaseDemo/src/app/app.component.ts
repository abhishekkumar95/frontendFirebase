import { Component } from '@angular/core';
import { AngularFireDatabase}   from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any[];
  constructor(db:AngularFireDatabase){
    db.list('/courses').subscribe(courses=>{
      this.courses=courses;
      console.log(this.courses);
    });
         // this.demo=demo;
      //console.log(this.demo);
    }
  }

