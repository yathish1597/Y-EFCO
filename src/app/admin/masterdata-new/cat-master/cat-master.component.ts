import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCatComponent } from './add-cat/add-cat.component';

@Component({
  selector: 'app-cat-master',
  templateUrl: './cat-master.component.html',
  styleUrls: ['./cat-master.component.scss']
})
export class CatMasterComponent implements OnInit {

  items = [
    { cat: 'Wires', status: true},
    { cat: 'Pipes', status: true},
    { cat: 'Tables', status: true},
    { cat: 'Cement', status: true},
    { cat: 'Dump truck', status: true},
    { cat: 'Backhole Loader', status: true},
    { cat: 'Excavator', status: true},
    { cat: 'Wheel Tractor Scrapers', status: true},
    { cat: 'Trenchers', status: true},
    { cat: 'Graders', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddCatComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
