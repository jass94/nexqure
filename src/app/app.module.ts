import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    // NgbModalModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [ DeleteComponent]
})
export class AppModule { }
