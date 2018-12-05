import {environment} from './../environments/environment'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootnoteComponent } from './footnote/footnote.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootnoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
