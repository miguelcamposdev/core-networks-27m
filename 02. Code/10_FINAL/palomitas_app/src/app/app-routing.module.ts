import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPermissionComponent } from './components/user-permission/user-permission.component';
import { HomeComponent } from './pages/home/home.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'user-permission', component: UserPermissionComponent},
  {path: 'my-profile', component: MyProfilePageComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
