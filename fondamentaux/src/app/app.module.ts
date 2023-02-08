import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonPremierComposantComponent } from './component/mon-premier-composant/mon-premier-composant.component';

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComposantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
