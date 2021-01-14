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
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    LoginPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
