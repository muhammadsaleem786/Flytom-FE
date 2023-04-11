import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig } from '../../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { LoaderService } from '../../../CommonService/LoaderService';
import { CommonToastrService } from '../../../CommonService/CommonToastrService';
@Component({
  selector: 'app-advancefilter',
  templateUrl: './advancefilter.component.html',
  styleUrls: ['./advancefilter.component.scss']
})
export class AdvancefilterComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public PersonalCard :any[]=[];
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
  }
    LoadDropDown() {
        this.loader.ShowLoader();
    let params = 
    {
    };
    this.http.Get(this.urlToApi + '/GetDropdown',params).subscribe(
            data => {
              debugger
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

}

