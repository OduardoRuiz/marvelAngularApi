import { IndexComponent } from './marvel/index/index.component';
import { CharactersComponent } from './marvel/characters/characters.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComicComponent } from './marvel/favorite-comic/favorite-comic.component';
import { FavoriteCharacterComponent } from './marvel/favorite-character/favorite-character.component';



const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: IndexComponent },
  { path: 'favComics', component: FavoriteComicComponent },
  { path: 'favCharacters', component: FavoriteCharacterComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }