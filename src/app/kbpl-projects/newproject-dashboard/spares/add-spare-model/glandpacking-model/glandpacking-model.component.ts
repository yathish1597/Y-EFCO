import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-glandpacking-model',
  templateUrl: './glandpacking-model.component.html',
  styleUrls: ['./glandpacking-model.component.scss']
})
export class GlandpackingModelComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<GlandpackingModelComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }


}
