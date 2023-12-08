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

  items = [
    { name: 'video-1.mp4', category: 'Reel' },
    { name: 'video-2.mp4', category: 'Reel' },
    { name: 'video-3.mp4', category: 'Reel' },
    { name: 'video-4.mp4', category: 'Reel' },
    { name: 'video-5.mp4', category: 'VFX' },
    { name: 'video-6.mp4', category: 'Reel' },
    { name: 'video-7.mp4', category: 'VFX' },
    { name: 'video-8.mp4', category: 'Reel' },
    { name: 'video-9.mp4', category: 'Reel' },
    { name: 'video-10.mp4', category: 'Reel' },
    { name: 'video-11.mp4', category: 'Animation' },
    // ... other items
  ];

  selectedCategory: string | null = null;

  filterByCategory(category: string | null): void {
    this.selectedCategory = category;
  }
}


