import { Component } from '@angular/core';

@Component({
  selector: 'app-privatemoving',
  templateUrl: './privatemoving.component.html',
  styleUrls: ['./privatemoving.component.scss']
})
export class PrivatemovingComponent {
  sliderValue = 0;
  sliderMoe = '';
  updateSliderValue(sliderMoe:any){
    this.sliderValue= sliderMoe;
    
  }
}
