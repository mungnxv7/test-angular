import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private inputDataSubject = new BehaviorSubject<number>(1);
  inputData = this.inputDataSubject.asObservable();

  constructor() {}

  updateInputData(inputData: number) {
    this.inputDataSubject.next(inputData)
  }
}
