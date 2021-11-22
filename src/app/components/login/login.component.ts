import jwt_decode  from 'jwt-decode';
import { AppComponent } from './../../app.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router,public app:AppComponent,private route:ActivatedRoute) {

  }
  result: any;
  userId:string="";
  errors:any;
  message:any;

  login(form: any) {

    if(this.app.Login)
   {this.router.navigate(["/home"]);
  }
else
  { 
   this.authService.login(form.value).subscribe((data: any) => {
      this.result = data;
      this.errors = data.errors;
      this.message = data.message;

      console.log(data.token);
      console.log(data.message);
      if (data.token) {
        localStorage.setItem("token", data.token);
        this.isLogin();
        this.app.Login=true;
        let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl')||'/';
        localStorage.setItem("returnUrl", returnUrl);

        this.router.navigate(["/home"]);
      }
      else {
        this.app.Login=false;
      }

    });
  }
  }
  isLogin(){
      let token:any = localStorage.getItem("token");
      if(token)
     { let decoded:any = jwt_decode(token);
      this.userId=decoded.UserId;
      console.log(decoded);
     }

  }

}
