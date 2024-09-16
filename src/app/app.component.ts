import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from './appServices/common.service';
import { StateServiceService } from './appServices/state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Jain temple';
  companyDetails:any;
  constructor(
    private commonservice:CommonService,
    private spinner:NgxSpinnerService,
    private StateData: StateServiceService
    ){
  
   } 
   receivedData: any;

    ngOnInit() {
      this.gethome();
    }
    datavar:any;
    
    gethome(){
      console.log('work')
      this.spinner.show()
      this.commonservice.getTempleDetail().subscribe((data:any)=>{
        console.log('temple',data)
        this.spinner.hide()
        this.datavar = data
        this.StateData.setDataVar(this.datavar);

    },(error:any)=>{
      this.spinner.hide()
      // console.log(error)
    })
  }
 
}
