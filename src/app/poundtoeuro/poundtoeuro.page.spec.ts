import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoundtoeuroPage } from './poundtoeuro.page';

describe('PoundtoeuroPage', () => {
  let component: PoundtoeuroPage;
  let fixture: ComponentFixture<PoundtoeuroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoundtoeuroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoundtoeuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
