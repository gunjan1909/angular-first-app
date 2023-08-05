import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  /* servers: Object = [
    {
      serverId: 10,
      serverStatus: "offline",
    },
    {
      serverId: 11,
      serverStatus: "online",
    },
  ];*/
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    //random ID between 1 to 10
    this.serverId = Math.floor(Math.random() * 10) + 1;
  }

  //method
  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
