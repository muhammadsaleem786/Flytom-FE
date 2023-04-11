import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalvansComponent } from './rentalvans.component';

describe('RentalvansComponent', () => {
  let component: RentalvansComponent;
  let fixture: ComponentFixture<RentalvansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalvansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalvansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
