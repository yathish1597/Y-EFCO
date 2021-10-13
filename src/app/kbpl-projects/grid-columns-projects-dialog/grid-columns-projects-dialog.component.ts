import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grid-columns-projects-dialog',
  templateUrl: './grid-columns-projects-dialog.component.html',
  styleUrls: ['./grid-columns-projects-dialog.component.scss']
})
export class GridColumnsProjectsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColumnsProjectsDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
