import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.scss']
})
export class UploadDocumentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UploadDocumentComponent>) { }

  ngOnInit() {
  }
  close(): void {
    this.dialogRef.close();
  }
}
