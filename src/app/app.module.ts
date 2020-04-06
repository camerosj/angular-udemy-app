import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PostCreateComponent } from './post-create/post-create.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule],
  declarations: [ AppComponent, HelloComponent, PostCreateComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
