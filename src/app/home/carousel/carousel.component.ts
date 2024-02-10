import { Component,  inject} from '@angular/core';
import {SlideService} from '../../services/slide.service';
import { Slides } from './slides.interface';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
slidesList: Slides[] = [];
slidesService: SlideService = inject(SlideService);
currentSlide: number = 0;
timer: number;
  constructor() {
    this.slidesList = this.slidesService.getSlides();

    this.timer = setInterval(() => {
      this.currentSlide++;
      if (this.currentSlide >= this.slidesList.length) {
        this.currentSlide = 0;
      }
    }, 3000);
  }
}
