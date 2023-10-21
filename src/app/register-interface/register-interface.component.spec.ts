import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInterfaceComponent } from './register-interface.component';

describe('RegisterInterfaceComponent', () => {
  let component: RegisterInterfaceComponent;
  let fixture: ComponentFixture<RegisterInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterInterfaceComponent]
    });
    fixture = TestBed.createComponent(RegisterInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
