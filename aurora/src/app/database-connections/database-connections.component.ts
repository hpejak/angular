import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-database-connections',
  templateUrl: './database-connections.component.html',
  styleUrls: ['./database-connections.component.css']
})
export class DatabaseConnectionsComponent implements OnInit {

  nameInput: string = '';
  valueInput: string = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onCreatePost() {

    // Sent Post to Database
    this.http.post('http://192.168.1.240:10080/setPurpose/',
      {name: this.nameInput, value: this.valueInput}
    )
      .subscribe((responseData: any) => {
        console.log(responseData);
      });
  }

}
