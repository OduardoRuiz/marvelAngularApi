import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LaravelMarvelService } from './service/laravel-marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  loggedIn = false;

  ngOnInit(){ 

    this.loggedIn = localStorage.getItem('token') !== null;
  }

  logout(){ 
    localStorage.removeItem('token');

  }





}
