import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'blogs';
  User={usertitle:'',
  post:''};
  cats=["Cyber Security","Artificial Intelligence","Full Stacks","IOT","Others"];
  postverified()
  {
    alert("Thank you,your post be will be uploaded soon!!!")
  }

}
