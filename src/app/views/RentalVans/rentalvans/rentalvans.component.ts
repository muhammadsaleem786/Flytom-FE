import { Component ,OnInit} from '@angular/core';
import { PaginationModel, PaginationConfig } from '../../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { Router ,NavigationEnd } from '@angular/router';
import { LoaderService } from '../../../CommonService/LoaderService';
import { CommonToastrService } from '../../../CommonService/CommonToastrService';

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
  public FuelTypeList: any[] = [];
  public SteeringTypeList: any[] = [];
  public DriveWheelTypeList:any[]=[];
public SeatList:any[]=[];
  public SeatListModel:any;
  public SteeringTypeModel:any;
  public FuelTypeModel:any;
  public DriveWheelTypeModel:any;

  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
     ) {
    this.loader.ShowLoader();
}
ngOnInit(): void {  
  this.loader.HideLoader();
  this.SeatList.push({"Name":"3"})
  this.LoadDropDown();
  this.Refresh(); 
}
  Refresh() {
      this.loader.ShowLoader();
      if(this.SeatListModel==undefined)
      this.SeatListModel=0;
      if(this.SteeringTypeModel==undefined)
      this.SteeringTypeModel=0;
      if(this.FuelTypeModel==undefined)
      this.FuelTypeModel=0;
      if(this.DriveWheelTypeModel==undefined)
      this.DriveWheelTypeModel=0;
  let params = 
  {
    CurrentPageNo: this.PModel.CurrentPage,
    RecordPerPage: this.PModel.RecordPerPage,
    SortOrder:this.PModel.SortOrder,
    SearchText:this.PModel.SearchText,
    Type:"V",
    SeatNo:this.SeatListModel.ID,
    SteeringType:this.SteeringTypeModel.ID,
    FuelType:this.FuelTypeModel.ID,
    DriveWheelType:this.DriveWheelTypeModel.ID,
  };
  this.http.Get(this.urlToApi + '/GetWebVehicleList',params).subscribe(
          data => {
      if(data.IsSuccess){
        this.loader.HideLoader();
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

LoadDropDown() {
  this.loader.ShowLoader();
let params = 
{
};
this.http.Get(this.urlToApi + '/GetDropdown',params).subscribe(
      data => {
  if(data.IsSuccess){
    this.loader.HideLoader();
    this.SteeringTypeList = data.ResultSet.SteeringTypeList;
    //this.SeatList=data.ResultSet.SeatList;
    this.FuelTypeList = data.ResultSet.FuelTypeList;
    this.DriveWheelTypeList=data.ResultSet.DriveWheelTypeList;

  }
      },
      error => {
        console.log(error);
      }
  );
}

selectSeat(seat: any) {
  this.SeatListModel = seat;
}
selectGearBox(seat: any) {
  this.SteeringTypeModel = seat;
}
selectFuel(seat: any) {
  this.FuelTypeModel = seat;
}
selectWheelDrive(seat: any) {
  this.DriveWheelTypeModel=seat;
}
advanceFilter(){
this.Refresh();

}

}
