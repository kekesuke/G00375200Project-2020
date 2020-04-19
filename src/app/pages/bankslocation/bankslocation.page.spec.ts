import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankslocationPage } from './bankslocation.page';

describe('BankslocationPage', () => {
  let component: BankslocationPage;
  let fixture: ComponentFixture<BankslocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankslocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankslocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
