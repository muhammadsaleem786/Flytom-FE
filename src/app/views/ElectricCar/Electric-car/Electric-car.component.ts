import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig } from '../../common/PaginationComponentConfig';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { LoaderService } from '../../../CommonService/LoaderService';
import { CommonToastrService } from '../../../CommonService/CommonToastrService';


@Component({
  selector: 'app-Electric-car',
  templateUrl: './Electric-car.component.html',
  styleUrls: ['./Electric-car.component.scss'],
})
export class ElectricCarComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public PersonalCard :any[]=[];
  public PModel = new PaginationModel();
  public PConfig = new PaginationConfig();
  public SeatListModel:any;
  public SteeringTypeModel:any;
  public FuelTypeModel:any;
  public DriveWheelTypeModel:any;

  public FuelTypeList: any[] = [];
  public SteeringTypeList: any[] = [];
  public DriveWheelTypeList:any[]=[];
public SeatList:any[]=[];
  public model:any ;
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
     ) {
    this.loader.ShowLoader();
}
  ngOnInit(): void {  
    this.LoadDropDown(); 
    this.Refresh(); 
  }
    Refresh() {
        this.loader.ShowLoader();
        debugger
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
      Type:"P",
      SeatNo:this.SeatListModel.ID,
      SteeringType:this.SteeringTypeModel.ID,
      FuelType:this.FuelTypeModel.ID,
      DriveWheelType:this.DriveWheelTypeModel.ID,
      
    };
    this.http.Get(this.urlToApi + '/GetWebVehicleList',params).subscribe(
            data => {
        if(data.IsSuccess){
this.PersonalCard=data.Data;
this.PersonalCard.forEach((item, index) => {
if(item.VehicleImage.length != 0)
this.PersonalCard[index].CarImage= GlobalVariable.BASE_Temp_File_URL + '' + item.VehicleImage[0].Image;
else
this.PersonalCard[index].CarImage="assets/imgs/feature/Car.png";

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
    this.SteeringTypeList = data.ResultSet.SteeringTypeList;
    this.SeatList=data.ResultSet.SeatList;
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

