import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./environments/environment";

//The app module is the root module of the application
import { AppModule } from "./app/app.module";

if (environment.production) {
  enableProdMode();
}

//start or bootstrap the angular application by passing the app module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
