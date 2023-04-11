import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailpageComponent } from './views/RentalPersonalCar/cardetailpage/cardetailpage.component';
import { HomeComponent } from './views/home/home.component';
import { RentalPersonalCarComponent } from './views/RentalPersonalCar/rental-personal-car/rental-personal-car.component';
import { RentalvansComponent } from './views/RentalVans/rentalvans/rentalvans.component';
import { VansdetailComponent } from './views/RentalVans/vansdetail/vansdetail.component';
import { LongTermRentalComponent } from './views/LongTermRental/longtermrental/longtermrental.component';
import { ServicepackingComponent } from './views/ServicePacking/servicepacking/servicepacking.component';
import { PrivatemovingComponent } from './views/privatemoving/privatemoving.component';
import { CompanymovingComponent } from './views/companymoving/companymoving.component';


const routes: Routes = [];


@NgModule({
  declarations: [ 
   // HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      
      { path: 'RentalPersonalCar', component: RentalPersonalCarComponent },
      { path: 'home', component: HomeComponent },
      { path: 'RentalVans', component: RentalvansComponent },
      
      { path: 'LongTermRental', component: LongTermRentalComponent},
      
      { path: 'ServicePacking', component: ServicepackingComponent},
      
      { path: 'Privatemoving', component: PrivatemovingComponent},
      { path: 'Companymoving', component: CompanymovingComponent},
      
      
      { path: 'details:id', component: CardetailpageComponent },
      { path: 'details', component: CardetailpageComponent },
      { path: 'VanDetail:id', component: VansdetailComponent },
      { path: 'VanDetail', component: VansdetailComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}

