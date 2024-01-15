import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainedChatbotComponent } from './trained-chatbot.component';

describe('TrainedChatbotComponent', () => {
  let component: TrainedChatbotComponent;
  let fixture: ComponentFixture<TrainedChatbotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainedChatbotComponent]
    });
    fixture = TestBed.createComponent(TrainedChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
