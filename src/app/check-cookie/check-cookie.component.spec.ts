import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCookieComponent } from './check-cookie.component';

describe('CheckCookieComponent', () => {
  let component: CheckCookieComponent;
  let fixture: ComponentFixture<CheckCookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCookieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
