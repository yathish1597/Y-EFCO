import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-consumablemodal',
  templateUrl: './consumablemodal.component.html',
  styleUrls: ['./consumablemodal.component.scss']
})
export class ConsumablemodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsumablemodalComponent>) { }
  num:number=1;
  ngOnInit() {
  }

  changenum(num){
    this.num=num;
  }
  close(): void {
    this.dialogRef.close();
  }


}
