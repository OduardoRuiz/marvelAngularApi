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

  //adiciona content-type e Authorization ao Header de requisição
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }),  

  };
  

  listCommics(): Observable<Comics[]> {
    return this.http.get<Comics[]>(this.endpoint + 'comic', this.httpOptions);
  }


  insertComic(comic?: any): Observable<any> {
    // tslint:disable-next-line: curly
    if (!comic) return EMPTY
    return this.http.post<any>(this.endpoint + 'comic', comic, this.httpOptions)
  }

  deleteComic(comic?: Comics): Observable<boolean> {
    if (!comic?.id) { return EMPTY; }
    return this.http.delete<boolean>(this.endpoint + 'comic/' + comic.id, this.httpOptions);

  }


  listCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.endpoint + 'character', this.httpOptions);
  }

  insertCharacter(character?: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'character', character, this.httpOptions);
  }

  deleteCharacter(character?: Characters): Observable<boolean> {
    if (!character?.id) { return EMPTY; }

    
    return this.http.delete<boolean>(this.endpoint + 'character/' + character.id, this.httpOptions);

  }

  loginApi(loginSend?: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'login', loginSend, this.httpOptions);


  }
  register(registerSend?: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'user', registerSend, this.httpOptions);


  }



}
