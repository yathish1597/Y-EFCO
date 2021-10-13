import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  isSubmitting = false;
  user: any;
  roles:any = [];
  myGroup: FormGroup;

  constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.myGroup = this.fb.group({
      UserId:new FormControl(''),
      UserName:new FormControl('', Validators.compose([Validators.required])),
      UserEmail:new FormControl('', Validators.compose([Validators.required])),
      UserPhone:new FormControl('', Validators.compose([Validators.required])),
      RoleId:new FormControl('', Validators.compose([Validators.required]))
    })
  }

  ngOnInit() {
    // this.getAllRoles();
    // if(this.data != null) {
    //   this.roles = this.data['Data']
    //   if(this.data['data'] != null) {
    //     this.user = this.data['data'];
    //     this.myGroup.controls["UserId"].setValue(this.user['UserId']);
    //     this.myGroup.controls['UserName'].setValue(this.user['UserName']);
    //     this.myGroup.controls['UserEmail'].setValue(this.user['UserEmail']);
    //     this.myGroup.controls['UserPhone'].setValue(this.user['UserPhone']);
    //     // this.myGroup.controls['RoleId'].setValue(this.user['RoleId']);
    //   }
    // }
  }


  close(): void {
    this.dialogRef.close();
  }

  saveData(){
    // if (this.myGroup.valid) {
    //   this.userService.editUsers(this.myGroup.value).subscribe(data => {
    //     console.log(this.myGroup.value);
    //     this.dialogRef.close(data['Data']);
    //     if(data != null) {
    //       if(data['Success'] != null) {
    //         if(data['Success']) {
    //           this.dialogRef.close(data['Data']);
    //         }
    //         else {
    //           this.isSubmitting = false;
    //         }
    //       }
    //     }
    //   });
    // }
    // if (this.myGroup.valid) {
    //   this.userService.editUsers(this.myGroup.value).subscribe(data => {
    //     if(data != null) {
    //       this.dialogRef.close(data['Data']);
    //     }
    //   });
    // }
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
