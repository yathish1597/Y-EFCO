import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddSiteComponent } from './add-site/add-site.component';

@Component({
  selector: 'app-site-master',
  templateUrl: './site-master.component.html',
  styleUrls: ['./site-master.component.scss']
})
export class SiteMasterComponent implements OnInit {

  items = [
     {sparetype: 'Gland Packing', subtype: '3',status: true, materials:"4"},
    {sparetype: 'Gaskets', subtype: '3',status: true, materials:"4"},
    {sparetype: 'Pressure Seal Rings', subtype: '3',status: true, materials:"5"},
{sparetype: 'Other Seals', subtype: '7',status: true, materials:"6"},
{sparetype: 'Stud', subtype: '2',status: true, materials:"-"},
{sparetype: 'Nut', subtype: '2',status: true, materials:"-"},
{sparetype: 'Spring', subtype: '-',status: true, materials:"-"}
    
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddSiteComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
