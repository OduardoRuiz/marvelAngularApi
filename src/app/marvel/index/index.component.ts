import { Component, OnInit } from '@angular/core';
import { Comics } from 'src/app/models/comics';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = "rest-marvel"

public comics$: Observable<any> | undefined;

  //injeta serviço no componente
  constructor(private http: HttpClient ) { }

  comicsArray = new Array<Comics>();

  ngOnInit(): void {

   
    this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")
    .subscribe(d=> console.log(d))

    this.comics$ = this.http.get("http://gateway.marvel.com/v1/public/comics?ts=1657156595&apikey=08b2b35d9dc9679f851d5ef889eb4822&hash=a6a1e6477c9198769558d4cc0abb4c5d")

  }

 


}
