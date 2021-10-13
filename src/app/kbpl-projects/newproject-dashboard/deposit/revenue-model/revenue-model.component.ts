import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-revenue-model',
  templateUrl: './revenue-model.component.html',
  styleUrls: ['./revenue-model.component.scss']
})
export class RevenueModelComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RevenueModelComponent>) { }

  ngOnInit() {
  }
  close(){
    this.dialogRef.close();
  }

}
