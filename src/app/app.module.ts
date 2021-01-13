import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ETableComponent } from './e-table/e-table.component';
import { ARowComponent } from './a-row/a-row.component';
import { ColorsComponent } from './colors/colors.component';
import { PartialComponent } from './colors/partial/partial.component';
import { RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ETableComponent,
    ARowComponent,
    ColorsComponent,
    PartialComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
