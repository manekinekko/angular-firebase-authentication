// CORE DEPS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods } from 'angularfire2';

// MATERIAL DESIGN MODULES
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';

export let MD_MODULES: any = [
  MdToolbarModule,
  MdButtonModule,
  MdCardModule
];

// APP
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
    ...MD_MODULES
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
