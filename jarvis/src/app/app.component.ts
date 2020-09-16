import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jarvis';
  fullDate: Date = new Date();

  dateDay: number = this.fullDate.getUTCDate();
  dateMonth: string = this.fullDate.toLocaleDateString('HR');


}
