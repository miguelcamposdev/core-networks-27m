import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { UserPermissionComponent } from './components/user-permission/user-permission.component';
import { MyProfilePageComponent } from './pages/my-profile-page/my-profile-page.component';
import { ApiKeyInterceptor } from './utils/api-key.interceptor';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviePopularComponent,
    UserPermissionComponent,
    MyProfilePageComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
