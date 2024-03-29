import { Component,OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig,FilterModel } from '../../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { LoaderService } from '../../../CommonService/LoaderService';
import { CommonToastrService } from '../../../CommonService/CommonToastrService';


@Component({
  selector: 'app-rental-personal-Car',
  templateUrl: './rental-personal-Car.component.html',
  styleUrls: ['./rental-personal-Car.component.scss'],
})
export class RentalPersonalCarComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public PersonalCard :any[]=[];
  public PModel = new PaginationModel();
  public PConfig = new PaginationConfig();
  public SeatListModel:any;
  public SteeringTypeModel:any;
  public FuelTypeModel:any;
  public DriveWheelTypeModel:any;
public model=new FilterModel();
  public FuelTypeList: any[] = [];
  public SteeringTypeList: any[] = [];
  public DriveWheelTypeList:any[]=[];
public SeatList:any[]=[];
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
    private formBuilder: FormBuilder) {
    this.loader.ShowLoader();
}
Form1: FormGroup = this.formBuilder.group({
  WheelTypeId : [''],  
  FuelTypeId : [''],  
  
}); 
  ngOnInit(): void {  
    this.loader.HideLoader();
    this.SeatList.push({"Name":"5"})
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
      Type:"P",
      SeatNo:this.SeatListModel.ID,
      SteeringType:this.SteeringTypeModel.ID,
      FuelType:this.FuelTypeModel.ID,
      DriveWheelType:this.DriveWheelTypeModel.ID,
      
    };
    this.http.Get(this.urlToApi + '/GetWebVehicleList',params).subscribe(
            data => {
        if(data.IsSuccess){
          this.loader.HideLoader();
          debugger
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

