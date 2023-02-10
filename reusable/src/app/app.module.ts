import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostCardComponent } from './components/demonstration/post-card/post-card.component';
import { ExoComponent } from './components/exo/exo.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCardComponent,
    ExoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
