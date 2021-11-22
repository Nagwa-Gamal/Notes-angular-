import { Router } from '@angular/router';
import  jwt_decode  from 'jwt-decode';
import { AppComponent } from './../../app.component';
import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  addForm=new FormGroup({
      title:new FormControl(null,[Validators.required]),
      text:new FormControl(null,[Validators.required]),
    }); 
  
    editForm=new FormGroup({
      title:new FormControl(null,[Validators.required]),
      text:new FormControl(null,[Validators.required]),
    });

    showForm=new FormGroup({
      title:new FormControl(null,[Validators.required]),
      text:new FormControl(null,[Validators.required]),
    });

  token:any;
  userId:any;
  decoded:any;
  constructor(private noteService:NoteService,public app:AppComponent, private router: Router) { 
    this.token=localStorage.getItem("token");
    this.decoded = jwt_decode(this.token);
this.userId=this.decoded.UserId;

  }

  ngOnInit(): void {
    this.getAllNotes();
  }
result:any;
result1:any;
id:any;
newProduct:any;
getAllNotes(){
 this.noteService.getAllNotes().subscribe(data=>{
  this.result= data;
  console.log(data);

 });
}



 deleteNote(id:any){
  this.noteService.deleteNote(id).subscribe(data=>{
   console.log(data);
 
  });
}
search(title:any){
  console.log(title);

  this.noteService.search(title).subscribe(data=>{
    this.result= data;
    console.log(data);
 
  });
}

addNote(form){
  form['userId']=this.userId;
  this.noteService.addNote(form).subscribe((data:any)=>{
    console.log(form);
    console.log(data.message);

  
   });
}

passvalues(note){

  this.editForm.controls['title'].setValue(note.title);
  this.editForm.controls['text'].setValue(note.text);
  this.showForm.controls['title'].setValue(note.title);
  this.showForm.controls['text'].setValue(note.text);
this.id=note.id;
}
editNote(form){
  form['userId']=this.userId;
  form['Id']=this.id;
  this.noteService.editNote(form).subscribe(data=>{
    console.log(data);
  
   });
}
cancle()
{
  this.router.navigate(["/notes"]);

}
}