import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-home',
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  itemsPerSlide = 6.5;
  singleSlideOffset = true;
  noWrap = false;


  slides = [
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg' },
    { image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg' }
  ];
  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  onSlideRangeChange(indexes: number[] | void): void {
    // console.log(`Slides have been switched: ${indexes}`);
  }
}
