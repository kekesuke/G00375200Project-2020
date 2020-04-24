import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddnewnotePage } from './addnewnote.page';

describe('AddnewnotePage', () => {
  let component: AddnewnotePage;
  let fixture: ComponentFixture<AddnewnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewnotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddnewnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
