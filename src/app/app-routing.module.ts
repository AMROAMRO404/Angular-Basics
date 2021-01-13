import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ColorsComponent } from './colors/colors.component';

const routes: Routes = [
  { path: 'colors/:color', component: ColorsComponent },
  { path: 'binding', component: BindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
