import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HomeComponent } from './pages/home/home.component';
import { GettingStartedComponent } from './pages/gettingstarted/gettingstarted.component';

import { HttpClientModule } from '@angular/common/http';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: { title: 'Getting Started' }
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        NavBarModule, FooterModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, {useHash: false})
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
