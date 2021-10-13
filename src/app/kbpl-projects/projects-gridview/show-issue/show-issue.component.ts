import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-show-issue',
  templateUrl: './show-issue.component.html',
  styleUrls: ['./show-issue.component.scss']
})
export class ShowIssueComponent implements OnInit {
  items=[
    {"name":"Electrical Document"},
    {"name":"Construction Document"},
    {"name":"Tools Document"}
   
  ]
   
  constructor(public dialogRef: MatDialogRef<ShowIssueComponent>) { 
    
  }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
