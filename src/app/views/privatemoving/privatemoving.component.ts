import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig } from '../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../AngularConfig/global';
import { HttpService } from '../../CommonService/HttpService';
import { LoaderService } from '../../CommonService/LoaderService';
import { CommonToastrService } from '../../CommonService/CommonToastrService';
import { OfferModel } from '../privatemoving/OfferModel';
@Component({
  selector: 'app-privatemoving',
  templateUrl: './privatemoving.component.html',
  styleUrls: ['./privatemoving.component.scss']
})

export class PrivatemovingComponent implements OnInit{
 public model: OfferModel = new OfferModel();
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  private movingurl = GlobalVariable.BASE_Api_URL + "/moving"
  public PModel = new PaginationModel();
  public PConfig = new PaginationConfig();
  public SeatListModel:any;
  public SteeringTypeModel:any;
  public FuelTypeModel:any;
  public DriveWheelTypeModel:any;
  public sliderValue = 0;
  public sliderMoe = '';
  public FuelTypeList: any[] = [];
  public SteeringTypeList: any[] = [];
  public DriveWheelTypeList:any[]=[];
public SeatList:any[]=[];
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
    private formBuilder: FormBuilder, ) {
    this.loader.ShowLoader();
}
MovingForm: FormGroup = this.formBuilder.group({
  Id : [''],  
        MovingDate : [''],  
       IsFlexible : [''],  
        DesiredMovingDate : [''],  
       IsPackedItem : [''],  
       IsStoreObject : [''],  
         IsCurrentHome :[''],  
        IsInsureMoving : [''],  
        MovingLoad : [''],  
         NoOfPeople : [''],  
         CurrentAddress : [''],  
        StreetNo : [''],  
         SizeOfHome : [''],  
         TotalRoom :[''],  
        HouseType : [''],  
         IsMovedStorageRoom :[''],  
         IsMovedGarage : [''],  
        ParkingDistance : [''],  
         NewAddress : [''],  
         NewStreetNo : [''],  
         PostalCode : [''],  
        NewTotalRoom : [''],  
         NewHouseType : [''],  
         ApartmentFloor : [''],  
         IsLift : [''],  
        NewParkingDistance :[''],  
        IsMovingHeavyObject : [''],  
        IsMovingValueableItem :[''],  
        AdditionalInfo : [''],  
       Name : [''],  
        Email : [''],  
        Phone : [''],  

  //Name: ['', Validators.required],   
 
}
); 
submitted = false;
get f() { return this.MovingForm.controls; }
  ngOnInit(): void {  
   
    this.LoadDropDown(); 
  }
  updateSliderValue(sliderMoe:any){
    this.sliderValue= sliderMoe;    
    if(this.sliderValue==7)
    this.AddMovingForm();
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
AddMovingForm() {
    debugger
  this.submitted = true;
  if (this.MovingForm.invalid) {
    return;
  }    
  this.MovingForm.value.IsStoreObject=this.MovingForm.value.IsStoreObject=="Yes"?true:false;
  this.MovingForm.value.IsFlexible=this.MovingForm.value.IsFlexible=="Yes"?true:false;
  this.MovingForm.value.IsPackedItem=this.MovingForm.value.IsPackedItem=="Yes"?true:false;
  this.MovingForm.value.IsCurrentHome=this.MovingForm.value.IsCurrentHome=="Yes"?true:false;
  this.MovingForm.value.IsInsureMoving=this.MovingForm.value.IsInsureMoving=="Yes"?true:false;
  this.MovingForm.value.IsMovedStorageRoom=this.MovingForm.value.IsMovedStorageRoom=="Yes"?true:false;
  this.MovingForm.value.IsMovedGarage=this.MovingForm.value.IsMovedGarage=="Yes"?true:false;
  this.MovingForm.value.IsMovingHeavyObject=this.MovingForm.value.IsMovingHeavyObject=="Yes"?true:false;
  this.MovingForm.value.IsMovingValueableItem=this.MovingForm.value.IsMovingValueableItem=="Yes"?true:false;

 
  // this.http.Post(this.movingurl + '/AddUpdate', this.MovingForm.value).subscribe((res) => {
  //  debugger
  // //  if(res!=undefined){
  // //    if (res.IsSuccess) {        
  // //      this.submitted = false;
  // //      this.MovingForm.reset(); 
  // //      alert(res.Message);
  // //    }
  // //    else {    
  // //        alert(res.ErrorMessage); 
  // //    }
  // //  }      
  // }, err => {
  //   console.log(err);
  // }); 

} 
}
