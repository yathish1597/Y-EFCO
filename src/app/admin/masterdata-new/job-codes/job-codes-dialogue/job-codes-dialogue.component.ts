import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-job-codes-dialogue',
  templateUrl: './job-codes-dialogue.component.html',
  styleUrls: ['./job-codes-dialogue.component.scss']
})
export class JobCodesDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<JobCodesDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
