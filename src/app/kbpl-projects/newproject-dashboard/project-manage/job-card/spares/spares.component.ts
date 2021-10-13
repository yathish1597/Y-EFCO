import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AddSpareModelComponent } from './add-spare-model/add-spare-model.component';

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.scss']
})
export class SparesComponent implements OnInit {

values = [
  {type: 'I-Bolt', date: '8-6-2021', technician : 'Vijay Surya', supervisor: 'Vijay Surya', remarks: 'Good'},
  {type: 'Gland Packing ', date: 'N/A', technician : 'N/A', supervisor: 'N/A', remarks: 'Good'},
  {type: 'Gasket', date: 'N/A', technician : 'N/A', supervisor: 'N/A', remarks: 'Good'},
]

addSpareModel(){
  let dialogRef = this.dialog.open(AddSpareModelComponent, {
    data: null,
    height: 'auto',
    width: '900px',
    autoFocus: false
  });
}

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

}
