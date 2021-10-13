import { Component, OnInit,ViewChild} from '@angular/core';
import { MatDialog, MatSort, MatTableDataSource } from '@angular/material';
import { AddjobcardComponent } from './addjobcard/addjobcard.component';
import { ConsumablemodalComponent } from './consumablemodal/consumablemodal.component';

 
export interface Data {
orderId : string;
efcoUN: string;
type: string;
spares: number;
consumables: number;
details: string;

}

const ELEMENT_DATA: Data[] = [
  {orderId : 'BMD - CRH LHS', efcoUN: 'RAPK 1003-004', type: 'Safety Valve', spares : 3, consumables : 2,details: 'view'  },
  {orderId : 'BMD - MS Line RHS', efcoUN: 'RAPK 1003-001', type: 'Safety Valve', spares : 4, consumables : 3,details: 'view'  },
];


@Component({
  selector: 'app-jobcards',
  templateUrl: './jobcards.component.html',
  styleUrls: ['./jobcards.component.scss']
})
export class JobcardsComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  displayedColumns: string[] = [ 'efcoUN','orderId', 'type', 'spares', 'consumables', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild('firstTable') firstTable : MatSort;
  ngOnInit() {
    this.dataSource.sort = this.firstTable;
  }
  AddContract() {
    const dialogRef = this.dialog.open(AddjobcardComponent, {

      autoFocus: false,
      height: 'auto',
      width: '600px',

    });
  }
  consumables() {
    const dialogRef = this.dialog.open(ConsumablemodalComponent, {

      autoFocus: false,
      height: 'auto',
      width: '900px',

    });
    // let dialogRef = this.dialog.open(ConsumablemodalComponent, {
    //   data: stat,
    //   height: 'auto',
    //   width: '600px',
    //   autoFocus: false
    // });
    
    // dialogRef.afterClosed().subscribe(data => {
    //   if (data != null && data !== undefined) {
    //   }
    // });
  }


}
