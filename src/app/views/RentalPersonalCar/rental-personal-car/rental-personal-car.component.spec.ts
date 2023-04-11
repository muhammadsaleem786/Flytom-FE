import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalPersonalCarComponent } from './rental-personal-car.component';

describe('RentalPersonalCarComponent', () => {
  let component: RentalPersonalCarComponent;
  let fixture: ComponentFixture<RentalPersonalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalPersonalCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalPersonalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
