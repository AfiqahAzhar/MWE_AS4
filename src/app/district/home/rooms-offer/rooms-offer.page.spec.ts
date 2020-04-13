import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomsOfferPage } from './rooms-offer.page';

describe('RoomsOfferPage', () => {
  let component: RoomsOfferPage;
  let fixture: ComponentFixture<RoomsOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
