import { Injectable } from '@angular/core';
import{ Note} from '../../models/note.model'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  private notes: Note[] =[];
  private note: Note;

  constructor(private storage:Storage) { }

  saveNote(note: Note){
    note.createDate = Date.now();//ID for the note
    this.notes.push(note);//pushing single note to the notes.
    this.storage.set('notes', this.notes);//adding it to the local storage as key "notes"
    
  }
  
  async getAllNotes(){
    const notes = await this.storage.get('notes');
    this.notes = notes == null ? [] : notes; //checking if its null  if its null return [] otherwise the notes
    return [...this.notes]; //spread operator or we can use .slice to get them separete
  }

  deleteNote(createDate:number){
    this.notes = this.notes.filter((note)=>{
      return note.createDate !== createDate//getting all the notes except the one we want to delete.
    });//return all the element except the one that we're passing
    this.storage.set('notes', this.notes);// updateing the local storage with the new value
  }
  
  async getNote(createDate:number){//async process the data.
    const notes = await this.storage.get('notes');
    this.note = [...notes].find(r => r.createDate === createDate); // if the collection is equal to the date we pass
    return this.note; //returning the single note filtered by createdate
  }

  getOneNote(){//getting single note to pass it to view page
    return this.note;
  }
}
