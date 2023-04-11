import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardetailpageComponent } from './cardetailpage.component';

describe('CardetailpageComponent', () => {
  let component: CardetailpageComponent;
  let fixture: ComponentFixture<CardetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardetailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
