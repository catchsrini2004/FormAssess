import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WssDataOutputComponent } from './wss-data-output/wss-data-output.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WssDataOutputComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
