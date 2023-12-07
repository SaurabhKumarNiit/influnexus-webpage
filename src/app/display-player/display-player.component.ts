// display-player.component.ts

import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-display-player',
  templateUrl: './display-player.component.html',
  styleUrls: ['./display-player.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DisplayPlayerComponent {

  videos: string[] = [
    'video-1.mp4', 
    'video-2.mp4',
    'video-3.mp4',
    'video-4.mp4',
    'video-5.mp4',
    'video-6.mp4',
    'video-7.mp4',
    'video-8.mp4',
    'video-9.mp4',
    'video-10.mp4',
    'video-11.mp4',
    // 'video-8.mp4'
  ];


}
