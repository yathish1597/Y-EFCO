import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-expense-code-dialogue',
  templateUrl: './expense-code-dialogue.component.html',
  styleUrls: ['./expense-code-dialogue.component.scss']
})
export class ExpenseCodeDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExpenseCodeDialogueComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
