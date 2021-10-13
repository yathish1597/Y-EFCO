import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-consumable',
  templateUrl: './add-consumable.component.html',
  styleUrls: ['./add-consumable.component.scss']
})
export class AddConsumableComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddConsumableComponent>,@Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    console.log(this.data);
  } 

  
  close(): void {
    this.dialogRef.close();
  }

}
