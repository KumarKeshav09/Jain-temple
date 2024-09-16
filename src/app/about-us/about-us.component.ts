import { Component } from '@angular/core';
import { CommonService } from '../appServices/common.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  aboutvar:any;
  constructor(private commonservice:CommonService){

  }

   ngOnInit(): void {
   }

  
}
