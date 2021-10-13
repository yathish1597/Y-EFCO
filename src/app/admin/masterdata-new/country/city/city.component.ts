import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCityComponent } from '../add-city/add-city.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  items = [
    {city:'Bilzen', status: true},
    {city:'Borgloon', status: true},
    {city:'Hasselt', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddCityComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
