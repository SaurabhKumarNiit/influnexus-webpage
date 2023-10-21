import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1s ease-out')),
    ]),
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      transition(':enter', animate('1s ease-out')),
    ]),
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }), // Use { optional: true } to handle the case when there are no elements to stagger
      ]),
    ]),
  ],
})
export class AboutComponent {
  headerState = 'in';
  teamHeaderState = 'in';
  teamMembers = [
    { name: 'John Doe', role: 'Lead Video Editor', image: 'https://media.istockphoto.com/id/1279844456/photo/young-indian-business-woman-entrepreneur-looking-at-camera-in-the-office.jpg?s=612x612&w=0&k=20&c=QuLbOHis00BKOYksMEJhmQulJJmCSrvcIV6StHCivfk=' },
    { name: 'Jane Smith', role: 'UX/UI Designer', image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=' },
    // Add more team members as needed
  ];

  constructor() {
    // Set initial animation states
    this.headerState = 'in';
    this.teamHeaderState = 'in';
  }

  // This method is used to trigger the animations when needed
  startAnimations() {
    this.headerState = 'in';
    this.teamHeaderState = 'in';
  }
}
