import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MorecurrencyPage } from './morecurrency.page';

describe('MorecurrencyPage', () => {
  let component: MorecurrencyPage;
  let fixture: ComponentFixture<MorecurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorecurrencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MorecurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
