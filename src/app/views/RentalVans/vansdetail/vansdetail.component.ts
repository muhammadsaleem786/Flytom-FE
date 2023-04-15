import { Component,OnInit ,Input} from '@angular/core';
import { map,Observable  } from 'rxjs';
import { GlobalVariable } from '../../../AngularConfig/global';
import { HttpService } from '../../../CommonService/HttpService';
import { Router ,ActivatedRoute} from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-vansdetail',
  templateUrl: './vansdetail.component.html',
  styleUrls: ['./vansdetail.component.scss']
})
export class VansdetailComponent implements OnInit{
  private urlToApi = GlobalVariable.BASE_Api_URL + "/home"
  public PersonalCard :any;
  public imageButtons:any[]=[];
  public sub: any;
  public imageSrc:any;
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
        Type:"V"
      };
      this.http.Get(this.urlToApi + '/GetVehicleById', param).subscribe(
        data => {
    if(data.IsSuccess){
this.PersonalCard=data.Data;
this.imageButtons=data.Data.VehicleImage;
this.imageButtons.forEach((item, index) => {
  if(item.Image != null){
    if(index==0)
    this.imageSrc=GlobalVariable.BASE_Temp_File_URL + '' + item.Image;
  this.imageButtons[index].Image= GlobalVariable.BASE_Temp_File_URL + '' + item.Image;
  }
  else{
    if(index==0)
    this.imageSrc="assets/imgs/feature/van.png";
  this.imageButtons[index].Image="assets/imgs/feature/van.png";
  }
  });

    }
        },
        error => {
          console.log(error);
        }
    );
  });
}
  onClick(imageNameObject:any) {
    this.imageSrc = imageNameObject.Image;
  }
}
