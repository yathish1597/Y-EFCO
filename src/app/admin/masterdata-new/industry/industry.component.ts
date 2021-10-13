import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddIndustryComponent } from './add-industry/add-industry.component';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit { 

  items = [
    {name: 'Chemicals', code: 'CHEM', status: true},
    {name: 'Logistics and Chain Supply', code: 'LOGI', status: true},
    {name: 'Digital Marketing Agencies', code: '-', status: true},
    {name: 'Software Product Development', code: 'SOFT', status: true},
    {name: 'Import & Export', code: '-', status: true},
    {name: 'Financial Services', code: '-', status: true},
    {name: 'Ware Housing', code: '-', status: true},
    {name: 'Mining', code: '-', status: true},
    {name: 'Others', code: '-', status: true},
    {name: 'Immigration Consultants', code: '-', status: true},
    {name: 'Manuafacturing', code: '-', status: true},
    {name: 'Construction', code: 'CONS', status: true},
    {name: 'Real Estate', code: '-', status: true},
    {name: 'Pharma', code: '-', status: true},
    {name: 'Helath Care', code: '-', status: true},
    {name: 'Hospitality', code: '-', status: true},
    {name: 'Transporatation', code: '-', status: true},
    {name: 'Infrastructure', code: '-', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddIndustryComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
