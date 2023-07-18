import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { LoaderService } from './CommonService/LoaderService';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flytomApp';
  constructor(private _router: Router, public loader: LoaderService) {
    this.loader.ShowLoader()
}
ngOnInit() {
  this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
          this.loader.ShowLoader();
      }
      if (route instanceof NavigationEnd) {
          window.scroll(0, 0);
          this.loader.HideLoader();
      }
  });

}

}
