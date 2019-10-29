import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleResetComponent } from './google-reset.component';

describe('GoogleResetComponent', () => {
  let component: GoogleResetComponent;
  let fixture: ComponentFixture<GoogleResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
