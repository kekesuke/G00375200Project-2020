import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewnotePage } from './viewnote.page';

describe('ViewnotePage', () => {
  let component: ViewnotePage;
  let fixture: ComponentFixture<ViewnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
