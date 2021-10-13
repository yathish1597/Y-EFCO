import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.scss']
})
export class AddRolesComponent implements OnInit {

  role: any;
  myGroup: FormGroup;
  isSubmitting: boolean = false;

  constructor(public fb: FormBuilder, public alertService: AlertService, @Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<AddRolesComponent>) {
    this.myGroup = this.fb.group({
      RoleId:new FormControl(''),
      RoleName:new FormControl(null, Validators.compose([Validators.required]))
    })
  }

  ngOnInit() {
    if(this.data != null) {
      if(this.data['data'] != null) {
        this.role = this.data['data'];
        this.myGroup.controls['RoleId'].setValue(this.role['RoleId']);
        this.myGroup.controls['RoleName'].setValue(this.role['RoleName']);
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  saveData(){
    this.alertService.createAlert('Successfully saved.', 1);
  }

  inputNotAllowed() {
    return false;
  }
  onlyNumbers(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58));
  }
  onlyAlphabets(event) {
    let k;
    k = event.charCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123));
  }
  alphaNumeric(event) {
    let k;
    k = event.charCode;
    return ((k > 47 && k < 58) || (k > 64 && k < 91) || (k > 96 && k < 123));
  }

}