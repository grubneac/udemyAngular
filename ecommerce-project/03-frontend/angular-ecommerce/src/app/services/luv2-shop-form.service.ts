import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Luv2ShopFormService {

  constructor() { }

  getCreditCardMonths(startMonth: number): Observable<number[]>{

    let data: number[] = [];

    // build an array for "Month" dropdown list
    // - start at current month and loop until 12

    for (let theMonth = startMonth; theMonth <= 12; theMonth++) {
      data.push(theMonth);
    }

    return of(data);
  }

  getCreditCardYears(): Observable<number[]>{

    let data: number[] = [];

    // build an array for "Year" dropdown list
    // - start at current year and loop for nex 10 year

    const startYear: number = new Date().getFullYear();

    for (let theYear = startYear; theYear <= (startYear + 10); theYear++) {
      data.push(theYear);
    }

    return of(data);
  }



}