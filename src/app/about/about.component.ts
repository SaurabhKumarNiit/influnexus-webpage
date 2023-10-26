// about-us.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  // Mock data for services
  services = [
    { title: 'Video Editing' ,imgPath:'https://d13kjxnqnhcmn2.cloudfront.net/AcuCustom/Sitename/DAM/071/Video_editing_-_Main.jpg', description: 'Elevate your content with professional video editing for a polished and engaging outcome.' },
    { title: 'Reels Editing' ,imgPath:'https://plugins-media.makeupar.com/smb/blog/post/2022-04-27/9839f784-3452-4e59-acc1-b929e3a4582f.jpg', description: 'Boost your social media presence with attention-grabbing reels crafted for various platforms.' },
    { title: 'Graphic Design' ,imgPath:'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/255646104/original/d46bfa1193bcc22d1cf9cccc3286f05a90b1c9e9/do-highend-graphic-design-redesign-vector-tracing-and-nft-art.png', description: 'Bring ideas to life with stunning designs, from posters to social media graphics.' },
    { title: 'Animation Design' ,imgPath:'https://bollywoodcloseup.files.wordpress.com/2013/12/mahabharat-3d.png', description: ' Add a dynamic touch to projects with impactful animations.' },
    { title: 'Motion Graphics' ,imgPath:'https://www.animation299.com/img/motion1.gif', description: 'Enhance visuals with dynamic motion graphics seamlessly integrated into projects.' },
    { title: 'Carousel Design' ,imgPath:'https://i.fbcd.co/products/resized/resized-750-500/instagram-carousel-1-18393ca08854b09e94f399155dbd2852090f52a2c58a6aeb17c3e8a5f9244334.jpg', description: 'Create scroll-stopping carousels for social media that tell compelling visual stories.' },
    // Add more services as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
