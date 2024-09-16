import { Component, OnInit } from '@angular/core';
import { CommonService } from '../appServices/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
newsdata:any;
titlevar:any;
  constructor(
    private commonservice:CommonService
  ){
  }
  ngOnInit(): void {
  
  }
  
}
