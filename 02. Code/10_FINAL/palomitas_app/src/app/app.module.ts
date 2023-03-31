import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { UserPermissionComponent } from './components/user-permission/user-permission.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviePopularComponent,
    UserPermissionComponent,
    MyProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
