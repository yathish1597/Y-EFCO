import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-contracts-dialog',
  templateUrl: './contracts-dialog.component.html',
  styleUrls: ['./contracts-dialog.component.scss']
})
export class ContractsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ContractsDialogComponent>) { }

  ngOnInit() {
  }

  values = [
    {contract:"2478BA",contractname:"MRC",client:"Robert"},
    {contract:"3478BA",contractname:"MPK",client:"John"},
    {contract:"4478BA",contractname:"Beacon",client:"Singh"}
  ]

  close(){
    this.dialogRef.close();
  }

}
