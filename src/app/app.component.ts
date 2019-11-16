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
      apiKey: "AIzaSyDrvu7JavgfCAC32RSfUvcuMx4_jLxcASc",
      authDomain: "blog-a9b4c.firebaseapp.com",
      databaseURL: "https://blog-a9b4c.firebaseio.com",
      projectId: "blog-a9b4c",
      storageBucket: "blog-a9b4c.appspot.com",
      messagingSenderId: "542261829768",
      appId: "1:542261829768:web:06808c2ddb995282b9bf3d",
      measurementId: "G-NDBQ7WEXNS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
