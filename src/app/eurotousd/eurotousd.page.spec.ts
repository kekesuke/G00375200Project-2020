import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EurotousdPage } from './eurotousd.page';

describe('EurotousdPage', () => {
  let component: EurotousdPage;
  let fixture: ComponentFixture<EurotousdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurotousdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EurotousdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
