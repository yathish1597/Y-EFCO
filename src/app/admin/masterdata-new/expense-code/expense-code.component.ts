import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExpenseCodeDialogueComponent } from './expense-code-dialogue/expense-code-dialogue.component';

@Component({
  selector: 'app-expense-code',
  templateUrl: './expense-code.component.html',
  styleUrls: ['./expense-code.component.scss']
})
export class ExpenseCodeComponent implements OnInit {

  items = [
    {code: 'Breakfast', unit: '$ / day', limit: 'Daily', amount: '$36.00', rate: '$59.00', budget: 'No', reimbursable: 'No', attachment: 'Yes', status: true},
    {code: 'Fuel', unit: 'litres / km', limit: 'Monthly', amount: '$3,000.00', rate: '$150.00', budget: 'Yes', reimbursable: 'Yes', attachment: 'No', status: true},
    {code: 'Integration Fee', unit: '', limit: '', amount: '', rate: '$500.00', budget: 'Yes', reimbursable: 'No', attachment: 'No', status: true},
    {code: 'Lunch', unit: '$ / day', limit: 'Weekly', amount: '$60.59', rate: '$20.10', budget: 'Yes', reimbursable: 'No', attachment: 'No', status: true},
    {code: 'Mileage', unit: '$ / km', limit: 'No Limit', amount: '$0.00', rate: '$0.50', budget: 'Yes', reimbursable: 'No', attachment: 'No', status: true},
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(ExpenseCodeDialogueComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
