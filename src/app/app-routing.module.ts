import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ColorsComponent } from './colors/colors.component';
import { DirectivesComponent } from './directives/directives.component';
import { LoadMimicBehaviorComponent } from './load-mimic-behavior/load-mimic-behavior.component';
import { ParentComponent } from './parent/parent.component';
const routes: Routes = [
  { path: 'colors/:color', component: ColorsComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'tableDirective', component: LoadMimicBehaviorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
