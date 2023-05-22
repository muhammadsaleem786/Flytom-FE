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
      title:'Atle Solgård',
      description:'Hadde hjelp av Flyttom i dag,Meget flinke og effektive.folk .stor takk til Mr Georgia...Nr 1 😊',

     },
     { 
      title:'Rolf Anda',
      description:'Gode råd angående leie leie av bil.👍😊',
   
     },
     { 
      title:'Dream Events',
      description:'Vi anbefaler Flyttom på det sterkeste for deres profesjonelle service, raske svar, beste priser og nye kjøretøy. Vi bruker Flyttom-tjenester fra de siste fire årene og har aldri hatt noen tvist.',
  
     },
     { 
      title:'David Dave',
      description:'Vi benyttet Riktige valg både til flytting og flyttevask og er veldig fornøyd. God oppfølging, løsningsorienterte, møtte opp som avtalt og veldig hyggelige ansatte. Anbefales!',
   
     },
     { 
      title:'Anette Iversen',
      description:'Veldig god service Veldig god hjelp når eg trengte leie bil',
   
     },
     { 
      title:'Emma',
      description:'Fast movers, polite service',
   
     }

     ,
     { 
      title:'Akin Anli',
      description:'Trengte flyttebil på kort varsel, dette ordnet Daglig leder innen kort tid selv om det meste allerede var utleid. Takk for hjelpen',
   
     }
     ,
     { 
      title:'Olav Jessheim',
      description:'Rask og god service,og god pris! Anbefales! Ekstra pluss for at jeg alltid kan sette fra meg min egen bil ved leie av større bil.',
   
     },
     { 
      title:'Eigil Bjørnarson Bø',
      description:'Bra løsning for studenter som skal bytte leilighet eller lignende. Raskt og enkelt, anbefales absolutt!',
   
     }
     
    
  ];
}
