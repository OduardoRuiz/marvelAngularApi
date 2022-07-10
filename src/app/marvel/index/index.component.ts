import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/models/comics';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = "rest-marvel"

public comics$: Observable<any> | undefined;

  //injeta serviço no componente
  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService ) { }

  comicsArray = new Array<Comics>();
  public name = new FormControl('');
  public link = new FormControl('');
  public thumbnail = new FormControl('');

  comicObj?: any;

  ngOnInit(): void {

   
    this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")
    .subscribe(d=> console.log(d))

    this.comics$ = this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")

  }

  saveFavorite(link : String, thumbnail : String, name: String): void {

    this.comicObj = { 
     'title': name,
     'thumbnail': thumbnail,
     'linkDetalhe': link
     
    }
    this.LaravelService.insertComic(this.comicObj as any).subscribe(comic=>{
     this.comicObj = comic
    })
 
    console.log(this.comicObj)
     };


}
