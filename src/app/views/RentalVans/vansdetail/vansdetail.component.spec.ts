import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VansdetailComponent } from './vansdetail.component';

describe('VansdetailComponent', () => {
  let component: VansdetailComponent;
  let fixture: ComponentFixture<VansdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VansdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VansdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
