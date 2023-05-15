import { Component,OnInit } from '@angular/core';
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
  constructor(public _router: Router,
    public http: HttpService,public loader: LoaderService, public toastr: CommonToastrService,
    private formBuilder: FormBuilder, private _commonService: CommonService,
    private ngbDateParserFormatter: NgbDateParserFormatter) {
    this.loader.ShowLoader();
}
Form1: FormGroup = this.formBuilder.group({
  Id : [''],  
  Name : [''],  
  Phone : [''], 
  Email :[''] ,
  EnquiryTypeId : [''],  
}); 

submitted = false;
get fs1() { return this.Form1.controls; }
ngOnInit(): void {   
}}
