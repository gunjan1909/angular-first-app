import { Component, OnInit } from "@angular/core";

@Component({
  // attribute give to a div or any element using []
  //selector: "[app-servers]",
  // attribute give to a class using .
  //selector: ".app-servers",
  selector: "app-servers",
  //template: "app-servers template",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";

  constructor() {
    setTimeout(() => {
      //loop to true and false every 2 sec
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = "Server was created";
  }
}
