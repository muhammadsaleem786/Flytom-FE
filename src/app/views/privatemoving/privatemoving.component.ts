import { Component } from '@angular/core';

@Component({
  selector: 'app-privatemoving',
  templateUrl: './privatemoving.component.html',
  styleUrls: ['./privatemoving.component.scss']
})
export class PrivatemovingComponent {
  sliderValue = 0;
  ShowSliderTow = false;
  updateSliderValue(){
    this.sliderValue= 1;
    this.ShowSliderTow = true;
  }
}
