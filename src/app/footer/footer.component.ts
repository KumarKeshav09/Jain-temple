import { Component } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  aboutvar:any;
  companyDetails:any;
  constructor(private commonservice:CommonService,private spinner: NgxSpinnerService){

  }

   ngOnInit(): void {
   
   }


}
