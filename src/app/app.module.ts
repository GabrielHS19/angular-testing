import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesDemoComponent } from './currencies-demo/currencies-demo.component';

import { GreetDemoComponent } from './greet-demo/greet-demo.component';
//test
@NgModule({
  declarations: [
    AppComponent,

    CurrenciesDemoComponent

    GreetDemoComponent

import { ComputeDemoComponent } from './compute-demo/compute-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputeDemoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
