import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor() { }
  private dataVarSubject = new BehaviorSubject<any>(null);
  dataVar$ = this.dataVarSubject.asObservable();

  setDataVar(data: any) {
    this.dataVarSubject.next(data);
  }
}
