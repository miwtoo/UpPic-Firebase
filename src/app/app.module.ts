import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule,StorageBucket } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [{ provide: StorageBucket, useValue: 'gs://uppictest.appspot.com/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
