import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-docs',
  templateUrl: './show-docs.component.html',
  styleUrls: ['./show-docs.component.scss']
})
export class ShowDocsComponent implements OnInit {

  items=[
    {"name":"Electrical Document"},
    {"name":"Construction Document"},
    {"name":"Tools Document"}
   
  ]
   
  constructor(public dialogRef: MatDialogRef<ShowDocsComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
