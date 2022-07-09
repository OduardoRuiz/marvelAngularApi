import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title = "rest-marvel"

  public characters$: Observable<any> | undefined;
  

  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService) { }


  ngOnInit(): void {

    this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")
    .subscribe(d=> console.log(d))

    this.characters$ = this.http.get("http://gateway.marvel.com/v1/public/characters?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")
  }

    

}