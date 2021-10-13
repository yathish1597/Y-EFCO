import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

 
export interface Data {
valveloc : string;
efcoUN: string;
type: string;
spares: number;
consumables: number;
details: string;

}

const ELEMENT_DATA: Data[] = [
  {valveloc : 'BMD - CRH LHS', efcoUN: 'RAPK 1003-004', type: 'Safety Valve', spares : 3, consumables : 2,details: 'view'  },
  {valveloc : 'BMD - MS Line RHS', efcoUN: 'RAPK 1003-001', type: 'Safety Valve', spares : 4, consumables : 3,details: 'view'  },
];


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['valveloc', 'efcoUN', 'type', 'spares', 'consumables', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('firstTable') firstTable : MatSort;
  ngOnInit() {
    this.dataSource.sort = this.firstTable;
  }

}
