import { Component, OnInit } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
constructor(
  private commonservice:CommonService,
  private spinner: NgxSpinnerService
){
}
ngOnInit(): void {
}

}
