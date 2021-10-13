import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-accept-model',
  templateUrl: './accept-model.component.html',
  styleUrls: ['./accept-model.component.scss']
})
export class AcceptModelComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AcceptModelComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }

}
