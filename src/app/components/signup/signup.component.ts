import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  constructor(private authService:AuthService,private router:Router){

  }
  result:any;
  message:any;
  errors:any;
register(form:any)
{
  this.authService.register(form.value).subscribe((data:any)=>{
  this.result= data;
  this.errors = data.errors;
  this.message = data.message;
  console.log(data.errors);
  if(this.result.message=='User created successfully!')
  this.router.navigate(["/login"]);

 });

}

}
