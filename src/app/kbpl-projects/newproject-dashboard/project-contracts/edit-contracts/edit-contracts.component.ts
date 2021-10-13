import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-contracts',
  templateUrl: './edit-contracts.component.html',
  styleUrls: ['./edit-contracts.component.scss']
})
export class EditContractsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditContractsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  @Input() childedit:boolean;

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }

}
