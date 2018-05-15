import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created.";
  serverName = 'test';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  displayDetails = false;
  numberOfClicks = 0;
  clicks = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created. Name is " + this.serverName + ".";
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  toggleDisplay(){
    this.displayDetails = !this.displayDetails;
    this.numberOfClicks++;
    this.clicks.push(this.numberOfClicks);
  }

  getBackgroundColor(click) {
    if(click > 4) return "dodgerblue"
  }

}
  