import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/models/characters';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';

@Component({
  selector: 'app-favorite-character',
  templateUrl: './favorite-character.component.html',
  styleUrls: ['./favorite-character.component.css']
})
export class FavoriteCharacterComponent implements OnInit {

  public characters$ = <Characters[]>{};

  constructor(private serviceLaravel: LaravelMarvelService) { }

  ngOnInit(): void {
    this.getListCharacters();
  
  }

  getListCharacters(){ 
    this.serviceLaravel.listCharacters()
      .subscribe(response=> this.characters$ = response)
  }

  delete(character:Characters) { 
    this.serviceLaravel.deleteCharacter(character)
    .subscribe(Response => this.getListCharacters)
  }
}
