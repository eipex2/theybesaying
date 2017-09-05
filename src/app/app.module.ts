/**
 * @Author: eipex
 * @Date:   2017-05-30T10:07:12-05:00
 * @Last modified by:   eipex
 * @Last modified time: 2017-09-04T16:08:52-05:00
 */



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAQpr6-6lNg6Rf4dD0pLqJRaArnmGht7To",
  authDomain: "theybesaying-6d354.firebaseapp.com",
  databaseURL: "https://theybesaying-6d354.firebaseio.com",
  projectId: "theybesaying-6d354",
  storageBucket: "theybesaying-6d354.appspot.com",
  messagingSenderId: "26068894881"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
