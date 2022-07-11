import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/models/comics';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = "rest-marvel"

  public comics$: Observable<any> | undefined;

  //injeta serviço no componente
  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }

  comicsArray = new Array<Comics>();
  public name = new FormControl('');
  public link = new FormControl('');
  public thumbnail = new FormControl('');

  comicObj?: any;

  ngOnInit(): void {



    this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657569723670&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=04882f46ad595db783989126fe903444")
      .subscribe(d => console.log(d))

    this.comics$ = this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657569723670&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=04882f46ad595db783989126fe903444")

  }

  saveFavorite(link: String, thumbnail: String, name: String): void {

    this.comicObj = {
      'title': name,
      'thumbnail': thumbnail,
      'linkDetalhe': link

    }
    this.LaravelService.insertComic(this.comicObj as any).subscribe(comic => {
      this.comicObj = comic
    },
    err => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    })

    console.log(this.comicObj)
  };


}
