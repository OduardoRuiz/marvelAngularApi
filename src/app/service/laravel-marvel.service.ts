import { HttpClient } from '@angular/common/http';
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

  listCommics(): Observable<Comics[]> {
    return this.http.get<Comics[]>(this.endpoint + 'comic');
  }
  listCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.endpoint + 'character');
  }

  insertComic(comic?: Comics): Observable<Comics> {
    // tslint:disable-next-line: curly
    if (!comic) return EMPTY
    return this.http.post<Comics>(this.endpoint + 'comic', comic)
  }
  deleteComic(comic?: Comics): Observable<boolean> {
    if (!comic?.id) { return EMPTY; }
    return this.http.delete<boolean>(this.endpoint + 'comic/' + comic.id);

  }


  insertCharacter(character?: Characters): Observable<Comics> {
    if (!character) return EMPTY
    return this.http.post<Comics>(this.endpoint + 'character', character)
  }
  
  deleteCharacter(character?: Characters): Observable<boolean> {
    if (!character?.id) { return EMPTY; }
    return this.http.delete<boolean>(this.endpoint + 'character/' + character.id);

  }



}
