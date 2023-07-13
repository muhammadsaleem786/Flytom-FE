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
  { path: 'Personbiler', component: RentalPersonalCarComponent },
  { path: 'Elbiler', component: ElectricCarComponent },
  { path: 'Electricdetails:id', component: ElectricCardetailpageComponent },
  { path: 'Electricdetails', component: ElectricCardetailpageComponent },
   { path: 'home', component: HomeComponent },
   { path: 'Om-oss', component: AboutComponent },
   { path: 'Bedriftsavtale', component: AgreementComponent },
   { path: 'Faq', component: FaqComponent },
   { path: 'Dødsbo', component: DodsboComponent },
   { path: 'Lagerhotell', component: StorageComponent },      
   { path: 'Veihjelp', component: HelpComponent },
   { path: 'Insurance', component: InsuranceComponent },   
   { path: 'Kontakt', component: ContactComponent },
   { path: 'Varebiler', component: RentalvansComponent },   
   { path: 'Bilabonnement', component: LongTermRentalComponent},   
   { path: 'Pakking', component: ServicepackingComponent},   
   { path: 'Privatflytting', component: PrivatemovingComponent},
   { path: 'Bedriftsflytting', component: CompanymovingComponent},  
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

