import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVideoRequestComponent } from './get-video-request.component';

describe('GetVideoRequestComponent', () => {
  let component: GetVideoRequestComponent;
  let fixture: ComponentFixture<GetVideoRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetVideoRequestComponent]
    });
    fixture = TestBed.createComponent(GetVideoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
