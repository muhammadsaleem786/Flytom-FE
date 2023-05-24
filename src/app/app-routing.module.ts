import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailpageComponent } from './views/RentalPersonalCar/cardetailpage/cardetailpage.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/About/About.component';
import { ContactComponent } from './views/Contact/Contact.component';
import { RentalPersonalCarComponent } from './views/RentalPersonalCar/rental-personal-car/rental-personal-car.component';
import { RentalvansComponent } from './views/RentalVans/rentalvans/rentalvans.component';
import { VansdetailComponent } from './views/RentalVans/vansdetail/vansdetail.component';
import { LongTermRentalComponent } from './views/LongTermRental/longtermrental/longtermrental.component';
import { ServicepackingComponent } from './views/ServicePacking/servicepacking/servicepacking.component';
import { PrivatemovingComponent } from './views/privatemoving/privatemoving.component';
import { CompanymovingComponent } from './views/companymoving/companymoving.component';
import { AgreementComponent } from './views/Agreement/Agreement.component';
import { FaqComponent } from './views/Faq/Faq.component';
import { DodsboComponent } from './views/Dodsbo/Dodsbo.component';
import { ElectricCarComponent } from './views/ElectricCar/Electric-car/Electric-car.component';
import { ElectricCardetailpageComponent } from './views/ElectricCar/Electriccardetailpage/Electric-detailpage.component';
import { HelpComponent } from './views/Help/Help.component';
import { InsuranceComponent } from './views/Insurance/Insurance.component';
import { StorageComponent } from './views/Storage/storage.component';






const routes: Routes = [

  //{ path: 'home', loadChildren: './theme/theme-routing.module#ThemeRoutingModule' },
  { path: 'RentalPersonalCar', component: RentalPersonalCarComponent },
  { path: 'ElectricCar', component: ElectricCarComponent },
  { path: 'Electricdetails:id', component: ElectricCardetailpageComponent },
  { path: 'Electricdetails', component: ElectricCardetailpageComponent },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'Agreement', component: AgreementComponent },
   { path: 'Faq', component: FaqComponent },
   { path: 'Dodsbo', component: DodsboComponent },
   { path: 'Storage', component: StorageComponent },      
   { path: 'Help', component: HelpComponent },
   { path: 'Insurance', component: InsuranceComponent },   
   { path: 'contact', component: ContactComponent },
   { path: 'RentalVans', component: RentalvansComponent },   
   { path: 'LongTermRental', component: LongTermRentalComponent},   
   { path: 'ServicePacking', component: ServicepackingComponent},   
   { path: 'Privatemoving', component: PrivatemovingComponent},
   { path: 'Companymoving', component: CompanymovingComponent},  
   { path: 'details:id', component: CardetailpageComponent },
   { path: 'details', component: CardetailpageComponent },
   { path: 'VanDetail:id', component: VansdetailComponent },
   { path: 'VanDetail', component: VansdetailComponent },
   { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true
  })],
 
  exports: [RouterModule]
})
export class AppRoutingModule {}

