import { Component } from '@angular/core';
import { CommonService } from '../appServices/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productvar:any
  constructor(private commonservice:CommonService, private spinner:NgxSpinnerService){

  }

   ngOnInit(): void {
   }

  
}
