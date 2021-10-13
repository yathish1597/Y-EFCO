import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-project-contract-gridcolumn',
  templateUrl: './project-contract-gridcolumn.component.html',
  styleUrls: ['./project-contract-gridcolumn.component.scss']
})
export class ProjectContractGridcolumnComponent implements OnInit {

  gridColumnForm: FormGroup;

  constructor(public fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public project: any, public dialogRef: MatDialogRef<ProjectContractGridcolumnComponent>) {
    this.createGridColumnGroup();
  }


  ngOnInit() {

  }

  createGridColumnGroup() {

  }
  close(): void {
    this.dialogRef.close();
  }

  saveGridColumns() {
    this.dialogRef.close();
  }
}
