import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Notess';
  public Login:boolean;
  public isAdmin:any;
   returnUrl:any;
   constructor(private router:Router,private route:ActivatedRoute){
    
   
     let token:any = localStorage.getItem("token");
     if(token)
    { let decoded:any = jwt_decode(token);
     this.Login=true;
     this.isAdmin=decoded.isAdmin;
     console.log(decoded);
     // this.returnUrl=this.route.snapshot.queryParamMap.get('returnUrl');
     // router.navigateByUrl(this.returnUrl);
    }
    else
    {
     this.Login=false;
 
    }
 
   }

}
