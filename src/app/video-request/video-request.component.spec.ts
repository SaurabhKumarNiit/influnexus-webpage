import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoRequestComponent } from './video-request.component';

describe('VideoRequestComponent', () => {
  let component: VideoRequestComponent;
  let fixture: ComponentFixture<VideoRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoRequestComponent]
    });
    fixture = TestBed.createComponent(VideoRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
