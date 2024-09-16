import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
@ViewChild('myform') myform! :NgForm
constructor(private commonservice:CommonService,private spinner:NgxSpinnerService){
}
ngOnInit(): void {
}
contactform(formdata:any){
  this.spinner.show()
  console.log(formdata,'formdataaa')


}
onsubmit(form:NgForm){
console.log(form.value,'submit by user')
this.contactform(form.value)
}
}
