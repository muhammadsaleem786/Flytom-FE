import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCarComponent } from './Electric-car.component';

describe('ElectricCarComponent', () => {
  let component: ElectricCarComponent;
  let fixture: ComponentFixture<ElectricCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
