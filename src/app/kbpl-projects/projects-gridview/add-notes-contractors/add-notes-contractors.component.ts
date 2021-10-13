import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-notes-contractors',
  templateUrl: './add-notes-contractors.component.html',
  styleUrls: ['./add-notes-contractors.component.scss']
})
export class AddNotesContractorsComponent implements OnInit {
  NotesForm: FormGroup;
  isProject:boolean = false;
  isSaveBtnClicked:boolean=false;
  todayDate = new Date();
  manageService: any;
  
  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
     public dialogRef: MatDialogRef<AddNotesContractorsComponent>,
     public fb: FormBuilder,public datePipe: DatePipe) {

    }
  ngOnInit() {
  }
  onSubmitNotesForm(formValues){
    if (this.NotesForm.valid) {
      this.isSaveBtnClicked=true;
      formValues.activityDate = this.datePipe.transform(formValues['activityDate'], 'yyyy-MM-dd');
      this.manageService.AddProjectNotes(formValues).subscribe(data => {
        if(data['Status'] == true){
          this.close('yes');
        }
        this.isSaveBtnClicked = false;
      });
    }
    else{
      this.NotesForm.controls.activityDate.markAsTouched();
      this.NotesForm.controls.remarks.markAsTouched();
    }
  }
  close(value) {
    this.dialogRef.close(value);
  }
}