import  jwt_decode  from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  token:any;
  decoded:any;
  header:any;
  headers:any;

  constructor(private client:HttpClient ) {
    this.token=localStorage.getItem("token");
    this.decoded = jwt_decode(this.token);

    this.header = new HttpHeaders().set('Authorization',"Bearer "+this.token);
     this.headers = { headers: this.header };
   }
  getAllNotes(){
   
    return this.client.get("https://localhost:44378/api/Note",this.headers);

  }
  

 addNote(form:any){
   console.log(form);
    return this.client.post("https://localhost:44378/api/Note",form,this.headers);

  }
 deleteNote(id:any)
  {
    return this.client.delete(`https://localhost:44378/api/Note/${id}`,this.headers);

  }  
  editNote(form:any)
  {
    return this.client.put("https://localhost:44378/api/Note",form,this.headers);

  } 
  search(title:any)
  {
    return this.client.get(`https://localhost:44378/api/Note/search/${title}`,this.headers);

  } 
}
