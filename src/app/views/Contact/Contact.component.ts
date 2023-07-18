import { Component,OnInit ,ViewChild, ElementRef} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
import { PaginationModel, PaginationConfig } from '../../views/common/PaginationComponentConfig';
import { GlobalVariable } from '../../AngularConfig/global';
import { HttpService } from '../../CommonService/HttpService';
import { LoaderService } from '../../CommonService/LoaderService';
import { CommonToastrService } from '../../CommonService/CommonToastrService';
import { ContectModel } from '../Contact/ContectModel';
import { I18NHtmlParser } from '@angular/compiler';
import{CommonService} from '../common/CommenService';
import { NgbDateParserFormatter,NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.scss']
})
export class ContactComponent implements OnInit{
  public model: ContectModel = new ContectModel();
  public EnquiryTypeList:any[]=[];
  private urlToApi = GlobalVariable.BASE_Api_URL + "/moving";
  public mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom : 14
 }
 public marker = {
    position: { lat: 38.9987208, lng: -77.2538699 },
 }
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
    private formBuilder: FormBuilder, private _commonService: CommonService,
    private ngbDateParserFormatter: NgbDateParserFormatter) {
    this.loader.ShowLoader();
}
Form1: FormGroup = this.formBuilder.group({
  Id : [''],  
  Name : [''],  
  Description:[''],
  ContactType:[''],
  CompanyName:[''],
  Phone : ['', Validators.required], 
  Email : ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  EnquiryTypeId : [''],  
}); 

submitted = false;
get fs1() { return this.Form1.controls; }
ngOnInit(): void {     
  this.loader.HideLoader();
  this.LoadDropDown();
}

LoadDropDown() {
  this.loader.ShowLoader();
let params = 
{
};
this.http.Get(this.urlToApi + '/GetDropdown',params).subscribe(
      data => {
  if(data.IsSuccess){
    this.EnquiryTypeList = data.ResultSet.ContactList;
    this.loader.HideLoader();
  }
      },
      error => {
        this.loader.HideLoader();
        console.log(error);
      }
  );
}
SaveOrUpdate() {
  this.loader.ShowLoader();
 if (this.Form1.invalid){
  this.submitted=true;
  return;
 }
  this.http.Post(this.urlToApi + '/ContactAddUpdate', this.model).subscribe((res) => {
   if(res!=undefined){
     if (res.IsSuccess) {  
      this.loader.HideLoader();  
      this.Form1.reset();  
       this.submitted = false;
       this.model=new ContectModel();
       this.toastr.Success("Takk for prisforespørsel, vi behandler dette så fort vi har kapasitet og vil ta kontakt med deg på din oppgitte kontaktinformasjon."
 +"Har du noen spørsmål utenom kan du ta kontakt med oss på telefon 51542400 i åpningstidene våre eller sende e-post til post@flyttom.no"
  +"There is to different form which has to switch. It means when people click on Bedrift.");
     }
     else {    
      this.loader.HideLoader();
     }
   }
  }, err => {
    this.loader.HideLoader();
    console.log(err);
  }); 

} 
}
