import { IndexComponent } from './marvel/index/index.component';
import { CharactersComponent } from './marvel/characters/characters.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: IndexComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }