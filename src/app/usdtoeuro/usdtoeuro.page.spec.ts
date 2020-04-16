import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsdtoeuroPage } from './usdtoeuro.page';

describe('UsdtoeuroPage', () => {
  let component: UsdtoeuroPage;
  let fixture: ComponentFixture<UsdtoeuroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsdtoeuroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsdtoeuroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
