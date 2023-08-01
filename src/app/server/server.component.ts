import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
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
  //method
  getServerStatus(): string {
    return this.serverStatus;
  }
}
