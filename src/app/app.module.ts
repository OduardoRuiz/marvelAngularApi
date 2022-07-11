import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { IndexComponent } from './marvel/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharactersComponent } from './marvel/characters/characters.component';
import { FavoriteComicComponent } from './marvel/favorite-comic/favorite-comic.component';
import { FavoriteCharacterComponent } from './marvel/favorite-character/favorite-character.component';
import { LoginComponent } from './marvel/login/login.component';
import { RegisterComponent } from './marvel/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CharactersComponent,
    FavoriteComicComponent,
    FavoriteCharacterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
