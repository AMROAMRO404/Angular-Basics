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

@NgModule({
  declarations: [
    AppComponent,
    ETableComponent,
    ARowComponent,
    ColorsComponent,
    PartialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'colors/:color', component: ColorsComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
