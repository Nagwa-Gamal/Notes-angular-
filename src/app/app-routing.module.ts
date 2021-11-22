
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NoteComponent } from './components/note/note.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:SignupComponent}
  ,{path:'notes',component:NoteComponent,canActivate:[AuthGuard]}
  ,{path:'home',component:HomeComponent}
  ,{path:'nav',component:NavbarComponent}



  ,{ path: '', redirectTo: 'home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
