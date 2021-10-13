import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-actions-dialogue',
  templateUrl: './actions-dialogue.component.html',
  styleUrls: ['./actions-dialogue.component.scss']
})
export class ActionsDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActionsDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
