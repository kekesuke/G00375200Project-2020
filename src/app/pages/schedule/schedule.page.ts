import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from '../../Services/noteservice.service'
import { Note } from 'src/models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  
private notes: Promise<Note[]>;
private note: Note;
  constructor(public router: Router ,private noteService:NoteserviceService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.notes = this.noteService.getAllNotes();//getting all the notes from the storage
  } 
  addNote(){
    return this.router.navigateByUrl('/addnewnote');//once add note clciked going to addnewnotepage
  }
  getNote(createDate:number){//getting note based on the createdate indentifier 
    this.noteService.getNote(createDate).then((n)=>{
      this.note = n;    
      this.router.navigateByUrl('/viewnote');
    });
   
  }
}
 