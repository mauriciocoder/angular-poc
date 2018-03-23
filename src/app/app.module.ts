import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* component */
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome.component';
/* routing */
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
