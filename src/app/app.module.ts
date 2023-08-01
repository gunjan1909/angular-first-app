import { BrowserModule } from "@angular/platform-browser";

// importing the decorator
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningComponent } from "./warningAlert/warning.component";
import { SuccessComponent } from "./successAlert/success.component";

// decorator
@NgModule({
  //register new component here
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SuccessComponent,
  ],
  //allows us to add other modules
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  //components passed for angular to bootstrap them
  //root component, all other components goes inside it
  // bootstrap: which component should angular be aware of when whole application starts
  // or which root component goes in indexhtml file
  bootstrap: [AppComponent],
})

//empty typescript class
export class AppModule {}
