import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonService } from '../appServices/common.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testdata:any;
  constructor(
    private spinner: NgxSpinnerService,
    private commonservice: CommonService,
  ) { }
ngOnInit(): void {
}
 
}
