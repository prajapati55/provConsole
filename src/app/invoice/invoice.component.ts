import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router, RouterModule} from "@angular/router";



@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  user: string;
  myVar: boolean;

  constructor(private router: Router) {

    var data =  JSON.parse(localStorage.getItem('users'));
    this.user= data.usertype;
    console.log(this.user);
    if(this.user == "admin"){
      this.myVar = false;
    }
    else{
      this.myVar = true;
    }
  }

  ngOnInit() {
  }

  displayedColumns = ['position', 'accesscode', 'amount', 'lastinvoicedate', 'action' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  newinvoice(){
    this.router.navigate(["newinvoice"]);
  }
}

export interface Element {
  amount: string;
  position: number;
  accesscode: string;
  lastinvoicedate: string;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 2, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 3, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 4, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 5, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 6, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 7, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 8, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  {position: 9, amount: '$100', lastinvoicedate: '23/12/2017', accesscode: 'TAC**', action: 'action'},
  // {position: 2, amount: 'Argon', weight: 1.0079, exam: 'Advanced Rigger Practical', lastinvoicedate: 'H', action: 'action'},
  // {position: 3, name: 'Oxygen', weight: 1.0079, exam: 'Advanced Rigger Practical', lastinvoicedate: 'H', action: 'action'},
  // {position: 4, name: 'Silicon', weight: 1.0079, exam: 'Advanced Rigger Practical', lastinvoicedate: 'H', action: 'action'},
  // {position: 5, name: 'Hydrogen', weight: 1.0079, exam: 'Advanced Rigger Practical', lastinvoicedate: 'H', action: 'action'},
  // {position: 6, name: 'Hydrogen', weight: 1.0079, exam: 'Advanced Rigger Practical', lastinvoicedate: 'H', action: 'action'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
