import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }
  
  info: undefined;
  elemento = "";

  public name = new FormControl('');
  public emailRegister = new FormControl('');
  public passwordRegister = new FormControl('');

  registerObj?: any;
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }


  Registrar(name : String, emailRegister: String, passwordRegister: String): void {

    //manda login para api
    this.registerObj = {
      'name': name,
      'email': emailRegister,
      'password': passwordRegister,
      'device_name': 'webConection'

    }
    this.LaravelService.register(this.registerObj as any).subscribe((registerSend: any) => {
      this.registerObj = registerSend
    })

    console.log(this.registerObj)
    //Handle token login
    fetch('http://127.0.0.1:8000/api/login', {
      'method': 'POST',
      'headers': this.headers,
      'body': JSON.stringify(this.registerObj)
    }).then(res => res.json())
      .then((data) => {
      
        this.setValueLocalStorage(data.user.id, data.token);
      });
  };
  setValueLocalStorage(userStore: string , tokenStore: string){ 

    localStorage.setItem('user', userStore);
    localStorage.setItem('token', tokenStore);
    window.location.reload();



  }
  

}
