import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus =  'No server was crated';
  serverName = 'TestServer';
  username = '';
  serverCreated = false;
  servers = ['Node 01', 'Node 02'];
  detailsShown = false;
  detailsLog = []
  detailCounter = 0;

  onUpdateUsername( event: any){
    this.username = event.target.value
  }

  isUsernameEmpty(){
    return this.username.length == 0
  }

  resetUsername(){
    this.username = ''
  }


  constructor() {
    setTimeout(() => {this.allowNewServer = true},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was create! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName( event: any){
    this.serverName = event.target.value;
  }

  displayDetails(){
    this.detailsShown = !this.detailsShown;
    this.detailsLog.push(new Date());
    this.detailCounter++;
  }

  detailsColor(k){
    return k >= 5 ? 'blue' : 'white'
  }

}
