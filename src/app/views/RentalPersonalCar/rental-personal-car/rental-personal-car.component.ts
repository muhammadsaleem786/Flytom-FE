import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig } from '../../../views/common/PaginationComponentConfig';
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
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
     ) {
    this.loader.ShowLoader();
}
  ngOnInit(): void {  
    this.Refresh(); 
  }
    Refresh() {
        this.loader.ShowLoader();
    let params = 
    {
      CurrentPageNo: this.PModel.CurrentPage,
      RecordPerPage: this.PModel.RecordPerPage,
      SortOrder:this.PModel.SortOrder,
      SearchText:this.PModel.SearchText,
      Type:"P"
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

}
// PersonalCard = [
//   { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    },
   
//    { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    },
//    { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    },
//    { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    },
//    { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    },
//    { 
//     title:'Koenigsegg',
//     img:'Car.png',
//     price:'80.00'
//    }
// ];
// }
