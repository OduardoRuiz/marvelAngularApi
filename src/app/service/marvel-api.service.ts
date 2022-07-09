import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Comics } from '../models/comics';


@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  //Strings de conexão com a API 
  public_key = "08b2b35d9dc9679f851d5ef889eb4822";
  timestampApi = "1657156595"
  hash = "a6a1e6477c9198769558d4cc0abb4c5d"; // Hash é o codigo MD5 do timestamp - private key e public key sequencialmente, para gerar acesse https://blueimp.github.io/JavaScript-MD5/
  comicsOrCaracters = "comics"


  // String completa de conexão com a api, concatenada com as chaves 
  URLConectionApi = `http://gateway.marvel.com/v1/public/${this.comicsOrCaracters}?ts=${this.timestampApi}&apikey=${this.public_key}&hash=${this.hash}`;


  constructor(private http: HttpClient) { }



  getComics(): Observable<Comics> {
    return this.http.get<Comics>(this.URLConectionApi );
  }
}
