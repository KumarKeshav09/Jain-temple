import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../appServices/common.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit{
  servicevar:any
  titlevar:any;
  constructor(private commonservice:CommonService, private spinner:NgxSpinnerService){

  }

   ngOnInit(): void {
   }

     

}
