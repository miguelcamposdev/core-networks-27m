import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PrivatePageComponent } from './components/private-page/private-page.component';
import { SecretPageComponent } from './components/secret-page/secret-page.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'secret', component: SecretPageComponent},
  {path: '', pathMatch: 'full', component: PrivatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
