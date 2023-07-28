import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  //components passed for angular to bootstrap them
  //root component, all other components goes inside it
  bootstrap: [AppComponent],
})
export class AppModule {}
