import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EurotopoundPage } from './eurotopound.page';

describe('EurotopoundPage', () => {
  let component: EurotopoundPage;
  let fixture: ComponentFixture<EurotopoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EurotopoundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EurotopoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
