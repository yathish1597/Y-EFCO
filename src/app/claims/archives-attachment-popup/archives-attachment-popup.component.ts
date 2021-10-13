import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-archives-attachment-popup',
  templateUrl: './archives-attachment-popup.component.html',
  styleUrls: ['./archives-attachment-popup.component.scss']
})
export class ArchivesAttachmentPopupComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ArchivesAttachmentPopupComponent>,@Inject(MAT_DIALOG_DATA) public data: any  ) { }

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
