import { Injectable } from '@angular/core';
import { Slides } from '../home/carousel/slides.interface';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
slidesList: Slides[] = [
  {
      id: 1,
      src: './assets/carousel1.jpeg',
      description: 'Slide 1'
    },
    {
      id: 2,
      src: './assets/carousel2.jpeg',
      description: 'Slide 2'
    },
];
  getSlides(): Slides[] {
    return this.slidesList;
  }
  getSlidesById(id: number): Slides | undefined{
    return this.slidesList.find(slides => slides.id === id);
  }
  constructor() { }
}
