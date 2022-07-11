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

  public name = new FormControl('');
  public link = new FormControl('');
  public thumbnail = new FormControl('');

  characterObj?: any;
  public characters$: Observable<any> | undefined;
  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }
  


  ngOnInit(): void {

    this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1657569723670&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=04882f46ad595db783989126fe903444")
      .subscribe(d => console.log(d))

    this.characters$ = this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1657569723670&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=04882f46ad595db783989126fe903444")
  }

  saveFavorite(link : String, thumbnail : String, name: String): void {

   this.characterObj = { 
    'name': name,
    'thumbnail': thumbnail,
    'linkDetalhe': link
    
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
