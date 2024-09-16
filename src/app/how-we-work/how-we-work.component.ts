import { Component, OnInit } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit{
  workdata:any;
  constructor(
    private spinner: NgxSpinnerService,
    private commonservice: CommonService,
  ) { }
  ngOnInit(): void {
  }
  }

