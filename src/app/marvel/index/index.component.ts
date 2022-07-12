import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/models/comics';
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
    //Strings de conexão com a API 
    public_key = "08b2b35d9dc9679f851d5ef889eb4822";
    timestampApi = "1657156595"
    hash = "a6a1e6477c9198769558d4cc0abb4c5d"; // Hash é o codigo MD5 do timestamp - private key e public key sequencialmente, para gerar acesse https://blueimp.github.io/JavaScript-MD5/
    comicsOrCaracters = "comics"

    
  // String completa de conexão com a api, concatenada com as chaves 
  URLConectionApi = `http://gateway.marvel.com/v1/public/${this.comicsOrCaracters}?ts=${this.timestampApi}&apikey=${this.public_key}&hash=${this.hash}`;

  public comics$: Observable<any> | undefined;

  //injeta serviço no componente
  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }

  comicsArray = new Array<Comics>();
  public name = new FormControl('');
  public link = new FormControl('');
  public thumbnail = new FormControl('');

  comicObj?: any;

  ngOnInit(): void {



    this.http.get(`${this.URLConectionApi}`)
      .subscribe(d => console.log(d))

    this.comics$ = this.http.get(`${this.URLConectionApi}`)

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
