import { Component ,OnInit} from '@angular/core';
import { PaginationModel, PaginationConfig } from '../../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rentalvans',
  templateUrl: './rentalvans.component.html',
  styleUrls: ['./rentalvans.component.scss']
})
export class RentalvansComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public RentalCard:any[]=[];
  public PModel = new PaginationModel();
  public PConfig = new PaginationConfig();
  constructor(public _router: Router,
    public http: HttpService
    //, public toastr: CommonToastrService,
     ) {
    //this.loader.ShowLoader();
}
ngOnInit(): void {  
  this.Refresh(); 
}
  Refresh() {
      //this.loader.ShowLoader();
  let params = 
  {
    CurrentPageNo: this.PModel.CurrentPage,
    RecordPerPage: this.PModel.RecordPerPage,
    SortOrder:this.PModel.SortOrder,
    SearchText:this.PModel.SearchText,
    Type:"V"
  };
  this.http.Get(this.urlToApi + '/GetWebVehicleList',params).subscribe(
          data => {
      if(data.IsSuccess){
this.RentalCard=data.Data;
this.RentalCard.forEach((item, index) => {
if(item.VehicleImage.length != 0)
this.RentalCard[index].CarImage= GlobalVariable.BASE_Temp_File_URL + '' + item.VehicleImage[0].Image;
else
this.RentalCard[index].CarImage="assets/imgs/feature/van.png";

});
      }
          },
          error => {
            console.log(error);
          }
      );
} 

 
}
