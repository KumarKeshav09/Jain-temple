import { Component, OnInit } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StateServiceService } from '../appServices/state-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 recievedData:any
 homeData:any

 constructor(
  private commonservice:CommonService,
  private spinner:NgxSpinnerService,
  private StateData: StateServiceService

  ){

 }

  ngOnInit() {
    this.gethome()
    // this.getabout()
    // this.getTeams()
    // this.getCompany()
  }

  gethome(){
    this.StateData.dataVar$.subscribe((data) => {
      this.recievedData = data;
      console.log('home',this.recievedData)
      this.homeData = this.recievedData?.data?.homepageInfo
    });
  }



}
