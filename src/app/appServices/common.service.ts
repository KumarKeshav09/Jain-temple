import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http: HttpClient) {
  }
   domain = "https://jaintemple.onrender.com/v1"

   getTempleDetail(){
    return this.http.get(this.domain + `/temple/getTempleById/6502a89680ca8b39129a7538`)
   }
   

}
