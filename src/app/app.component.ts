import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon Blog';

  // Your web app's Firebase configuration
  constructor() {
    var firebaseConfig = {
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
