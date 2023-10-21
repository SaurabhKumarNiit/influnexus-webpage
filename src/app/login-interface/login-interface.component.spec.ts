import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInterfaceComponent } from './login-interface.component';

describe('LoginInterfaceComponent', () => {
  let component: LoginInterfaceComponent;
  let fixture: ComponentFixture<LoginInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInterfaceComponent]
    });
    fixture = TestBed.createComponent(LoginInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
