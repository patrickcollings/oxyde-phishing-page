import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookResetComponent } from './outlook-reset.component';

describe('OutlookResetComponent', () => {
  let component: OutlookResetComponent;
  let fixture: ComponentFixture<OutlookResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlookResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlookResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
