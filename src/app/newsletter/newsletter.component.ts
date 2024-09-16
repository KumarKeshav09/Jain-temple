import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../appServices/common.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  @ViewChild('myform') myform! :NgForm
  constructor(private commonservice:CommonService,private spinner:NgxSpinnerService){
  }

  onsubmit(form:NgForm){
  console.log(form.value,'submit by user')
  }
}
