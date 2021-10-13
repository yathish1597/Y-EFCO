import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddCountryComponent } from './add-country/add-country.component';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  items = [
    {country: 'Bangladesh', state: '4',status: true},
    {country: 'India', state: '3',status: true},
    {country: 'Israel', state: '12', status: true},
    {country: 'East Africa', state: '10', status: true},
    {country: 'West Africa', state: '2',status: true},
    {country: 'Algeria', state: '4',status: true},
    {country: 'Morocco', state: '5',status: true},
    {country: 'Senegal', state: '3',status: true},
    {country: 'Nigeria', state: '7',status: true},
    {country: 'Egypt', state: '9', status: true},
    {country: 'Bahrain', state: '9',status: true},
    {country: 'Balkans', state: '8',status: true},
    {country: 'Portugal', state: '5',status: true},
    {country: 'Brazil', state: '7',status: true},
    {country: 'Oman', state: '4', status: true}
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddCountryComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
