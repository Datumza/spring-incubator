import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCreateBookingDialogComponent } from './flight-create-booking-dialog.component';

describe('FlightCreateBookingDialogComponent', () => {
  let component: FlightCreateBookingDialogComponent;
  let fixture: ComponentFixture<FlightCreateBookingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightCreateBookingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightCreateBookingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
