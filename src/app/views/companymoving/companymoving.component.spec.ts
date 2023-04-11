import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymovingComponent } from './companymoving.component';

describe('CompanymovingComponent', () => {
  let component: CompanymovingComponent;
  let fixture: ComponentFixture<CompanymovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanymovingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanymovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
