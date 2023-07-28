import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

//start or bootstrap the angular application by passing the app module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
