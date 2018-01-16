import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Router, RouterModule} from "@angular/router";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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


  displayedColumns = ['position', 'name', 'weight', 'symbol', 'exam', 'lastinvoicedate', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  newclient(){
    this.router.navigate(["newclient"]);
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  exam: string;
  lastinvoicedate: string;
  action: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 2, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 3, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 4, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 5, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 6, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 7, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 8, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 9, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 10, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 11, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  {position: 12, name: 'Tache Technologies', weight: 1, symbol: 'TAC', exam: 'Advanced Rigger Practical', lastinvoicedate: '23/12/17', action: 'action'},
  
];