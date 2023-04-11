import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 400,
    nav: true,
    navText: ['<img src="assets/imgs/icons/arrow.svg">', '<img src="assets/imgs/icons/arrow.svg">'],
    center: false,
    startPosition: 0,
    items: 3,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  };
  products: any[] = [
    { 
      title:'Albus Dumbledore',
      description:'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      designation: 'Manager @ Howarts',
      img:'user1.png'
     },
     { 
      title:'Albus Dumbledore',
      description:'““Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry,s standard dummy text ever since the 1500s.”',
      designation: 'Manager @ Howarts',
      img:'user2.png'
     },
     { 
      title:'Albus Dumbledore',
      description:'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      designation: 'Manager @ Howarts',
      img:'user3.png'
     },
     { 
      title:'Albus Dumbledore',
      description:'“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      designation: 'Manager @ Howarts',
      img:'user2.png'
     }
    
  ];
}
