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
  serverName: string = "";
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      //loop to true and false every 4 sec
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit(): void {}

  onCreateServer(event: Event) {
    //(<HTMLButtonElement>event.target).disabled = true;
    this.serverCreated = true;
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
