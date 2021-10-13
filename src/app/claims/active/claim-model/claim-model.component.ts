import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-claim-model',
  templateUrl: './claim-model.component.html',
  styleUrls: ['./claim-model.component.scss']
})
export class ClaimModelComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
data1;

  constructor(public dialogRef: MatDialogRef<ClaimModelComponent>,private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any) { 
  this.data1=data;
   }
  
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    console.log(this.data1);
  }

  close(): void {
    this.dialogRef.close();
  }

  saveStep() {
    this.dialogRef.close();
  }
  taskData: any;
  alertService: any;
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }

}
