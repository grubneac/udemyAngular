import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] =[
    new SalesPerson("Anup", "Kumar", "anup.kumar@lu2code.com", 50000),
    new SalesPerson("Vasea", "Pecus", "vasea.pecus@lu2code.com", 3500),
    new SalesPerson("Alex", "Grubneac", "grubneac@lu2code.com", 5000000),
    new SalesPerson("Tanea", "Grubneac", "tgrubneac@lu2code.com", 30000),
    new SalesPerson("Anton", "Grubneac", "agrubneac@lu2code.com", 10000),
    new SalesPerson("Polina", "Grubneac", "pgrubneac@lu2code.com", 10700)
  ];
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
