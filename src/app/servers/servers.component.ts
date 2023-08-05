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
  servers = ["Testserver", "Testserver2"];

  constructor() {
    //disable the button for 4 sec once page loads
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  ngOnInit(): void {}

  onCreateServer(event: Event) {
    //(<HTMLButtonElement>event.target).disabled = true;
    /*this.serverCreated = true;
    this.serverCreationStatus =
      this.serverName === ""
        ? ""
        : "Server was created! Name is " + this.serverName;*/

    // click the button and add the p tag only if there is some input given
    if (this.serverName !== "") {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus =
        "Server was created! Name is " + this.serverName;
    } else {
      this.serverCreated = false;
      this.serverCreationStatus = "No server was created";
    }
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
