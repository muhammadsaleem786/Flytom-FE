import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepackingComponent } from './servicepacking.component';

describe('ServicepackingComponent', () => {
  let component: ServicepackingComponent;
  let fixture: ComponentFixture<ServicepackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicepackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
