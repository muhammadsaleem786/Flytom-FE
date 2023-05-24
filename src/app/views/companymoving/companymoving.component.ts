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
import { I18NHtmlParser } from '@angular/compiler';
import{CommonService} from '../common/CommenService';
import { NgbDateParserFormatter,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-companymoving',
  templateUrl: './companymoving.component.html',
  styleUrls: ['./companymoving.component.scss']
})
export class CompanymovingComponent implements OnInit{
  public model: OfferModel = new OfferModel();
   private urlToApi = GlobalVariable.BASE_Api_URL + "/moving"
   public PModel = new PaginationModel();
   public PConfig = new PaginationConfig();
   public SeatListModel:any;
   public SteeringTypeModel:any;
   public FuelTypeModel:any;
   public DriveWheelTypeModel:any;
   public sliderValue = 0;
   public sliderMoe = '';
   public FlexibleMovingLoadList: any[] = [];
   public ApproximatelyList: any[] = [];
   public peopleList: any[] = [];
   public TotalRoomList:any[]=[];
   public HouseTypeList:any[]=[];
   public FloorsList:any[]=[];
 public employeesList:any[]=[];
 public CompanyFloorList:any[]=[];
 public FloorsTypeList:any[]=[];
   constructor(public _router: Router,
     public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
     private formBuilder: FormBuilder, private _commonService: CommonService,
     private ngbDateParserFormatter: NgbDateParserFormatter) {
     this.loader.ShowLoader();
 }
 MovingForm1: FormGroup = this.formBuilder.group({
  Id : [''],  
  IsPacking : [''],  
  MovingDate : [''], 
  IsWarehousehotel :[''] ,
  Ispiano : [''],  
  AdditionalInfo : [''],  
  ContactType: [''],  
 Name : ['', Validators.required],  
  Email : ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  Phone : ['', Validators.required],  
}
); 

MovingForm2: FormGroup = this.formBuilder.group({
  CurrentAddress : ['', Validators.required],  
  StreetNo : ['', Validators.required],  
  PostalCode : ['', Validators.required],  
    SizeOfHome : ['', Validators.required], 
    TotalRoomId :['', Validators.required],  
    HouseTypeId : ['', Validators.required],  
    FloorTypeId:['', Validators.required],
    garage:['', Validators.required],
    ParkingDistance:['', Validators.required]
}
); 
MovingForm3: FormGroup = this.formBuilder.group({
  NewAddress : ['', Validators.required],  
  NewStreetNo : ['', Validators.required],  
  NewPostalCode : ['', Validators.required],  
 NewTotalRoomId : ['', Validators.required],  
  NewHouseTypeId : ['', Validators.required],  
  NewSizeOfHome : ['', Validators.required],  
  NewFloorTypeId:['', Validators.required],
  NewParkingDistance : ['', Validators.required],  
  Newgarage:['', Validators.required]
 }
);


submitted = false;
get fs1() { return this.MovingForm1.controls; }
get fs2() { return this.MovingForm2.controls; }
get fs3() { return this.MovingForm3.controls; }
  ngOnInit(): void {  
    this.model.ContactType="B";
    this.ngbDateParserFormatter.format = (date: NgbDateStruct | null) => {
      if (date) {
        const day = date.day < 10 ? `0${date.day}` : date.day;
        const month = date.month < 10 ? `0${date.month}` : date.month;
        const year = date.year;
        return `${day}/${month}/${year}`;
      }
      return '';
    };
    this.LoadDropDown(); 
  }
  updateSliderValue(sliderMoe:any){
    if(sliderMoe==1){
      if (this.MovingForm1.invalid) {
        this.submitted=true;
        return;
      }else{
        this.submitted=false;
        this.sliderValue= sliderMoe;
      }      
    }
    if(sliderMoe==2){
      if (this.MovingForm2.invalid) {
        this.submitted=true;
        return;
      }else{
        this.submitted=false;
        this.sliderValue= sliderMoe;
      }  
    }
    if(sliderMoe==3){
      if (this.MovingForm3.invalid) {
        this.submitted=true;
        return;
      }else{
        this.submitted=false;
        this.AddMovingForm();
      }  
    }
  }
LoadDropDown() {
  this.loader.ShowLoader();
let params = 
{
};
this.http.Get(this.urlToApi + '/GetDropdown',params).subscribe(
      data => {
  if(data.IsSuccess){
    this.FlexibleMovingLoadList = data.ResultSet.FlexibleMovingLoadList;
    this.ApproximatelyList=data.ResultSet.ApproximatelyList;
    this.peopleList = data.ResultSet.peopleList;
    this.TotalRoomList=data.ResultSet.TotalRoomList;
    this.HouseTypeList=data.ResultSet.HouseTypeList;
    this.FloorsList=data.ResultSet.FloorsList;
    this.CompanyFloorList=data.ResultSet.floorList;
    this.FloorsList=data.ResultSet.FloorsList;
    this.FloorsTypeList=data.ResultSet.FloorsTypeList;
    this.employeesList=data.ResultSet.EmployeeList;
  }
      },
      error => {
        console.log(error);
      }
  );
}
AddMovingForm() {
  if (this.MovingForm1.invalid || this.MovingForm2.invalid || this.MovingForm3.invalid) {
    alert("fyll ut obligatoriske felt.");
    return;
    }
     
  this.model.IsPacking=this.model.IsPacking=="Yes"?"true":"false";
  this.model.IsWarehousehotel=this.model.IsWarehousehotel=="Yes"?"true":"false";
  this.model.Ispiano=this.model.Ispiano=="Yes"?"true":"false";
  this.model.Id=0;
 
  this.http.Post(this.urlToApi + '/AddUpdate', this.model).subscribe((res) => {
   if(res!=undefined){
     if (res.IsSuccess) {     
      this.model=new OfferModel();   
       this.submitted = false;
       this.MovingForm1.reset(); 
       this.MovingForm2.reset(); 
       this.MovingForm3.reset(); 
       window.location.reload();
       alert("Din melding ble sendt.Takk");
     }
     else {    
         alert("Din melding ble sendt.Takk"); 
     }
   }else
   window.location.reload();
  }, err => {
    console.log(err);
  }); 

} 
}
