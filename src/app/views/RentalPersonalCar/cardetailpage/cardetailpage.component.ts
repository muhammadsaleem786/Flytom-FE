import { Component,OnInit ,Input} from '@angular/core';
import { map,Observable  } from 'rxjs';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { Router ,ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-cardetailpage',
  templateUrl: './cardetailpage.component.html',
  styleUrls: ['./cardetailpage.component.scss']
})
export class CardetailpageComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public Baseurl = GlobalVariable.BASE_Temp_File_URL;
  public PersonalCard :any;
  public imageButtons:any[]=[];
  public sub: any;
  constructor(public _router: Router, public route: ActivatedRoute,
    public http: HttpService
    //, public toastr: CommonToastrService,
     ) {
    //this.loader.ShowLoader();
}
ngOnInit(): void {  
 
  this.sub = this.route.queryParams
  .subscribe(params => {
      let Id = params['id'];
      let param = 
      {
        Id: params['id'],
        Type:"P"
      };
      this.http.Get(this.urlToApi + '/GetVehicleById', param).subscribe(
        data => {
    if(data.IsSuccess){
this.PersonalCard=data.Data;
this.imageButtons=data.Data.VehicleImage;
this.imageButtons.forEach((item, index) => {
  if(item.Image != null)
  this.imageButtons[index].Image= GlobalVariable.BASE_Temp_File_URL + '' + item.Image;
  else
  this.imageButtons[index].Image="assets/imgs/feature/Car.png";
  
  });

    }
        },
        error => {
          console.log(error);
        }
    );
  });
}


  // PersonalCard: any[] = [
  //   { 
  //     title:'Koenigsegg',
  //     img:'Car.png',
  //     price:'80.00'
  //    }
  // ];

  // For Left side car images
  imageSrc = 'assets/imgs/feature/Car.png';
  // object
  // imageButtons = [ 
  //   {src:'assets/imgs/feature/Car.png',name: 'image-1'}, 
  //  {src:'assets/imgs/feature/car2.jpg', name: 'image-2'}, 
  //  {src:'assets/imgs/feature/car3.jpg', name: 'image-3'}]

  onClick(imageNameObject:any) {
    this.imageSrc = imageNameObject.src;
  }

}
