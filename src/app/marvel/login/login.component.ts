import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LaravelMarvelService } from 'src/app/service/laravel-marvel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {
  }

  info: undefined;
  elemento = "";
  


  public emailLogin = new FormControl('');
  public passwordLogin = new FormControl('');

  loginObj?: any;
  headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

  constructor(private http: HttpClient, private LaravelService: LaravelMarvelService, private router: Router) { }


  login(emailLogin: String, passwordLogin: String): void {

    //manda login para api
    this.loginObj = {
      'email': emailLogin,
      'password': passwordLogin,
      'device_name': 'webConection'

    }
    this.LaravelService.loginApi(this.loginObj as any).subscribe((loginSend: any) => {
      this.loginObj = loginSend
    })

    console.log(this.loginObj)
    //Handle token login
    fetch('http://127.0.0.1:8000/api/login', {
      'method': 'POST',
      'headers': this.headers,
      'body': JSON.stringify(this.loginObj)
    }).then(res => res.json())
      .then((data) => {

        this.setValueLocalStorage(data.user.id, data.token);

        console.log([data])
        this.router.navigate(['/comics'])


      });
  };

  setValueLocalStorage(userStore: string , tokenStore: string){ 

    localStorage.setItem('user', userStore);
    localStorage.setItem('token', tokenStore);
    window.location.reload();



  }

}
