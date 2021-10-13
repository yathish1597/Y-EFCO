import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  public dateTime1: Date;
  userProfileForm: FormGroup;

  constructor(public fb:FormBuilder, public dialogRef: MatDialogRef<ProfileDetailsComponent>,@Inject(MAT_DIALOG_DATA) public user: number,  private alertService: AlertService) {
    this.createUserProfileForm();
    }

  ngOnInit() {
    this.userProfileForm.controls['userName'].setValue('Admin');
    this.userProfileForm.controls['uniqueId'].setValue('admin@f2o.com');
    this.userProfileForm.controls['role'].setValue('9XXXXXXX11');
  }

  close(): void {
    this.dialogRef.close();
  }

  get userName() { return this.userProfileForm.get('userName'); }

  get uniqueId() { return this.userProfileForm.get('uniqueId'); }

  get role() { return this.userProfileForm.get('role'); }

  saveProfile() {
    this.alertService.createAlert('Successfully Saved.', 1);
    this.dialogRef.close();
  }

  createUserProfileForm() {
    this.userProfileForm = this.fb.group({
      userName : new FormControl(''),
      uniqueId : new FormControl(''),
      role : new FormControl(''),
    })
  }

}
