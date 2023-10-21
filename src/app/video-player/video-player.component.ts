import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import Swiper from 'swiper';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements AfterViewInit {
 
  @ViewChild('swiper', { static: false }) swiperElement: ElementRef | undefined = undefined;
  @ViewChild('.swiper-pagination', { static: false }) paginationElement: ElementRef | undefined;




  ngAfterViewInit() {
    if (this.swiperElement) {
      const swiper = new Swiper(this.swiperElement.nativeElement, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        spaceBetween: 60,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    } else {
      console.error('Swiper element not found or is undefined.');
    }
  }

}
