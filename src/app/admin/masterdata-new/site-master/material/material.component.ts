import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMaterialComponent } from '../add-material/add-material.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  
  items = [
    {materials:"Graphite", status: true },
    {materials:"PTFE", status: true, },
    {materials:"Asbestos",status: true, },
    {materials:"Others", status: true, }
  ]


  ngOnInit() {
  }

  openMaterialDialog(value) {
    let dialogRef = this.dialog.open(AddMaterialComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
