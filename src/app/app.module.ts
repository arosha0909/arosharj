import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenAccessComponent } from './token-access/token-access.component';
import { LauoutComponent } from './main/lauout/lauout.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenAccessComponent,
    LauoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
