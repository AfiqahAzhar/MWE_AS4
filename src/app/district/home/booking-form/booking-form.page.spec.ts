import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingFormPage } from './booking-form.page';

describe('BookingFormPage', () => {
  let component: BookingFormPage;
  let fixture: ComponentFixture<BookingFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
