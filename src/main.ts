import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {FIREBASE_PROVIDERS,
  defaultFirebase,
  AngularFire,
  AuthMethods,
  AuthProviders,
  firebaseAuthConfig} from 'angularfire2';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyCk3weREVFpOIN6pL_QVVNFRl3C3keMIRU",
    authDomain: "angular2-auth.firebaseapp.com",
    databaseURL: "https://angular2-auth.firebaseio.com",
    storageBucket: "angular2-auth.appspot.com"
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup
  })
]);
