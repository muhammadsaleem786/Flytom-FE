import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatemovingComponent } from './privatemoving.component';

describe('PrivatemovingComponent', () => {
  let component: PrivatemovingComponent;
  let fixture: ComponentFixture<PrivatemovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivatemovingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatemovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
