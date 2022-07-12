import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';
import { Characters } from 'src/app/models/characters';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title = "rest-marvel"
   //Strings de conexão com a API 
   public_key = "08b2b35d9dc9679f851d5ef889eb4822";
   timestampApi = "1657156595"
   hash = "a6a1e6477c9198769558d4cc0abb4c5d"; // Hash é o codigo MD5 do timestamp - private key e public key sequencialmente, para gerar acesse https://blueimp.github.io/JavaScript-MD5/
   comicsOrCaracters = "characters"

   
 // String completa de conexão com a api, concatenada com as chaves 
 URLConectionApi = `http://gateway.marvel.com/v1/public/${this.comicsOrCaracters}?ts=${this.timestampApi}&apikey=${this.public_key}&hash=${this.hash}`;

  public name = new FormControl('');
  public link = new FormControl('');
  public thumbnail = new FormControl('');

  characterObj?: any;
  public characters$: Observable<any> | undefined;
  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }
  


  ngOnInit(): void {

    this.http.get(`${this.URLConectionApi}`)
      .subscribe(d => console.log(d))

    this.characters$ = this.http.get(`${this.URLConectionApi}`)
  }

  saveFavorite(link : String, thumbnail : String, name: String): void {

   this.characterObj = { 
    'name': name,
    'thumbnail': thumbnail,
    'linkDetalhe': link,
    'user_id': `${localStorage.getItem("user")}`


    
    
   }
   this.LaravelService.insertCharacter(this.characterObj as any).subscribe(character=>{
    this.characterObj = character
   },
   err => {
     localStorage.removeItem('token');
     this.router.navigate(['/login'])
   })

   console.log(this.characterObj)
    };

  }
