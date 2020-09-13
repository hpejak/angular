import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {color:darkred}
  `]
})
export class AppComponent {
  title = 'angular-first-app';
  name = 'My name';
}
