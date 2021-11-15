import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode = false;




































  
  title = 'project-test-chatbot-iframe';
  
  switchEditMode(){
    this.editMode = !this.editMode;
  }
}
