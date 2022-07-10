import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Characters } from '../models/characters';
import { Comics } from '../models/comics';

@Injectable({
  providedIn: 'root'
})
export class LaravelMarvelService {

  private endpoint = environment.apiEndpoint

  constructor(private http: HttpClient) { }
  httpOpitions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  listCommics(): Observable<Comics[]> {
    return this.http.get<Comics[]>(this.endpoint + 'comic');
  }


  insertComic(comic?: any): Observable<any> {
    // tslint:disable-next-line: curly
    if (!comic) return EMPTY
    return this.http.post<any>(this.endpoint + 'comic', comic, this.httpOpitions)
  }

  deleteComic(comic?: Comics): Observable<boolean> {
    if (!comic?.id) { return EMPTY; }
    return this.http.delete<boolean>(this.endpoint + 'comic/' + comic.id);

  }


  listCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.endpoint + 'character');
  }

  insertCharacter(character?: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'character', character, this.httpOpitions);
  }

  deleteCharacter(character?: Characters): Observable<boolean> {
    if (!character?.id) { return EMPTY; }
    return this.http.delete<boolean>(this.endpoint + 'character/' + character.id);

  }



}
