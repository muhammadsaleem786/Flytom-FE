import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { map,Observable  } from 'rxjs';
@Component({
  selector: 'app-About',
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.scss']
})
export class AboutComponent implements OnInit{

  constructor(public _router: Router) {}

  ngOnInit(): void {  
  }
  
  goTocontactPage() {
    this._router.navigate(['/contact']);
  }
}
