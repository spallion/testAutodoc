import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DialogAnimationsExampleDialog, FirstComponent} from './first/first.component';
import { SecondComponent } from './second/second.component';
import {RouterModule, ROUTES} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import { CardComponent } from './card/card.component';
import {MatDialogModule} from "@angular/material/dialog";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardComponent,
    DialogAnimationsExampleDialog
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
