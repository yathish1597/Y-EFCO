import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-attachment-model',
  templateUrl: './attachment-model.component.html',
  styleUrls: ['./attachment-model.component.scss']
})



export class AttachmentModelComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AttachmentModelComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }  saveStep() {
    this.dialogRef.close();
  }
  taskData: any;
  alertService: any;
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

}
