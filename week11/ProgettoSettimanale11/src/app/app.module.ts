import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Per gestire il routing importo {Route, RouterModule} from '@angular/router';
import { Route, RouterModule } from '@angular/router';
//Per gestire le chiamate HTTP importo
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MoviesComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    Error404Component,
    FavoritesComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
