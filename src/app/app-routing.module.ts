import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { ColorsComponent } from './colors/colors.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ParentComponent } from './parent/parent.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
const routes: Routes = [
  { path: 'colors/:color', component: ColorsComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'login' },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
