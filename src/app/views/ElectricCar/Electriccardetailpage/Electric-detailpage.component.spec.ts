import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricCardetailpageComponent } from './Electric-detailpage.component';

describe('ElectricCardetailpageComponent', () => {
  let component: ElectricCardetailpageComponent;
  let fixture: ComponentFixture<ElectricCardetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricCardetailpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricCardetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
