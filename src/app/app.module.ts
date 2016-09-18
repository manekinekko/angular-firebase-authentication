// Core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods } from 'angularfire2';

// Third party modules
import { MdModule }  from './material.module';

// App
import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyCk3weREVFpOIN6pL_QVVNFRl3C3keMIRU",
        authDomain: "angular2-auth.firebaseapp.com",
        databaseURL: "https://angular2-auth.firebaseio.com",
        storageBucket: "angular2-auth.appspot.com"
      },
      {
        //method: AuthMethods.Popup,
        method: AuthMethods.Redirect
      }
    ),
    BrowserModule,
    ...MdModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
