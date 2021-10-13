import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-grid-view-clients',
  templateUrl: './grid-view-clients.component.html',
  styleUrls: ['./grid-view-clients.component.scss']
})
export class GridViewClientsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridViewClientsComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
