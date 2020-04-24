import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice.service';
import { Note } from 'src/models/note.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.page.html',
  styleUrls: ['./viewnote.page.scss'],
})
export class ViewnotePage implements OnInit {
  note: Note;

  constructor(private alertController:AlertController ,private router: Router,private noteService:NoteserviceService) {
    this.note = this.noteService.getOneNote();
  }

  ionViewWillEnter(){//It’s fired when entering a page, before it becomes the active one.
    this.note = this.noteService.getOneNote();//getting the note that was clicked
  }
  ngOnInit() {
   
  }

  deleteNote(createDate: number){
    this.noteService.deleteNote(createDate);//call the method to delete the note by ID(date)
    this.presentAlert();
    this.router.navigateByUrl('/schedule')//going back to schedule page
    this.router.dispose();//Disposes of the router.
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Note has been succesfully deleted.',

    });

    await alert.present();
  }
}
