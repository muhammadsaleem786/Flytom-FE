import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilterComponent } from './views/common/filter/filter.component';
import { HomeComponent } from './views/home/home.component';
import { NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './views/common/footer/footer.component';
import { AdvancefilterComponent } from './views/common/advancefilter/advancefilter.component';
import { CardetailpageComponent } from './views/RentalPersonalCar/cardetailpage/cardetailpage.component';
import { OurservicesComponent } from './views/common/ourservices/ourservices.component';
import { RentalPersonalCarComponent } from './views/RentalPersonalCar/rental-personal-car/rental-personal-car.component';
import { RentalvansComponent } from './views/RentalVans/rentalvans/rentalvans.component';
import { VansdetailComponent } from './views/RentalVans/vansdetail/vansdetail.component';
import { LongTermRentalComponent } from './views/LongTermRental/longtermrental/longtermrental.component';
import { ServicepackingComponent } from './views/ServicePacking/servicepacking/servicepacking.component';
import { HttpService } from './CommonService/HttpService';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonToastrService } from './CommonService/CommonToastrService';
import { LoaderService } from './CommonService/LoaderService';
import { PrivatemovingComponent } from './views/privatemoving/privatemoving.component';
import { CompanymovingComponent } from './views/companymoving/companymoving.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,AdvancefilterComponent,
    HomeComponent,FooterComponent,RentalPersonalCarComponent,CardetailpageComponent,
    OurservicesComponent, RentalvansComponent, VansdetailComponent,LongTermRentalComponent,
    ServicepackingComponent,
    PrivatemovingComponent,
    CompanymovingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,ToastrModule.forRoot(),
    CarouselModule,NgbDatepickerModule, NgbAlertModule, FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [HttpService,CommonToastrService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }