import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-action-type-dialogue',
  templateUrl: './action-type-dialogue.component.html',
  styleUrls: ['./action-type-dialogue.component.scss']
})
export class ActionTypeDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ActionTypeDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
