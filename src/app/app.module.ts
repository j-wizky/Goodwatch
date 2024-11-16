import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ReactiveFormsModule } from '@angular/forms';
import { ShellModule } from './Core/shell/shell.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ShellModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"goodwatch-bbb68","appId":"1:234364042765:web:583422e557f3c42c8c1f44","storageBucket":"goodwatch-bbb68.firebasestorage.app","apiKey":"AIzaSyAlF4OyKm8BY6AF8kYqh7RGXIrvcHeauYk","authDomain":"goodwatch-bbb68.firebaseapp.com","messagingSenderId":"234364042765","measurementId":"G-JWSKX7BLF3"})),
    provideAuth(() => getAuth()),
  ]
})
export class AppModule { }
