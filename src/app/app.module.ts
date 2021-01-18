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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';
import { LoadMimicBehaviorComponent } from './load-mimic-behavior/load-mimic-behavior.component';
import { ScrollDirective } from './scroll.directive';

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
    DirectivesComponent,
    HighlightDirective,
    LoadMimicBehaviorComponent,
    ScrollDirective,
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
