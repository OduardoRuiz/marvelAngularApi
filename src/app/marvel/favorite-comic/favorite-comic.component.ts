import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comics } from 'src/app/models/comics';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';

@Component({
  selector: 'app-favorite-comic',
  templateUrl: './favorite-comic.component.html',
  styleUrls: ['./favorite-comic.component.css']
})
export class FavoriteComicComponent implements OnInit {


 public comics$ = <Comics[]>{};


  constructor(private serviceLaravel: LaravelMarvelService) { }

  ngOnInit(): void {
    this.getListComics();
  }

  getListComics(){ 
    this.serviceLaravel.listCommics()
      .subscribe(response=> this.comics$ = response)
  }

  delete(comic:Comics) { 
    this.serviceLaravel.deleteComic(comic)
    .subscribe(Response => this.getListComics)
  }

}
