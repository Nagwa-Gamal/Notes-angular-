import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private client :HttpClient) { }

  login(form:any){
    return this.client.post("https://localhost:44378/api/Auth/login",form);

  }
  register(form:any)
  {
    return this.client.post("https://localhost:44378/api/Auth/register",form);

  }  
}
