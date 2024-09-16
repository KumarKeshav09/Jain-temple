import { Component } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  teamvar:any;
  titlevar:any;
  constructor(private commonservice:CommonService , private spinner:NgxSpinnerService){
  }
   ngOnInit(): void {
   }

 
}
