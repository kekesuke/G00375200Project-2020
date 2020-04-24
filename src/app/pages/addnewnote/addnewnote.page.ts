import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/noteservice.service';
import { Note } from 'src/models/note.model';
import { ReactiveFormsModule ,FormGroup,Validators,FormControl } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewnote',
  templateUrl: './addnewnote.page.html',
  styleUrls: ['./addnewnote.page.scss'],
})
export class AddnewnotePage implements OnInit {
  formGroup: FormGroup;
  note: Note;
  date: Date = new Date();
  title:string = '';
  content:string = '';

  constructor(private alertController: AlertController,private router:Router,private noteService:NoteserviceService) { 
    this.formGroup = new FormGroup({//instance of fromgroup
      title: new FormControl(),//formcontrol which is used in the front end
      content: new FormControl(),
      date: new FormControl(),

    })
  }

  ngOnInit() {
  }

  saveNote(value: Note){// passing the fromgroup.value as parameter (ngSubmit)="saveNote(formGroup.value)">
    this.noteService.saveNote(value);//saving note object
    this.presentAlert();//alerting that the note has been created
    this.router.navigateByUrl('/schedule')
  }

  async presentAlert() {//method to call alert controller
    const alert = await this.alertController.create({
      header: 'Note has been succesfully added.',

    });

    await alert.present();
  }

}
