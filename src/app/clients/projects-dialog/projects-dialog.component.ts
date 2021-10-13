import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-projects-dialog',
  templateUrl: './projects-dialog.component.html',
  styleUrls: ['./projects-dialog.component.scss']
})
export class ProjectsDialogComponent implements OnInit {

  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<ProjectsDialogComponent>) { 
    
  }

  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status?';
  public cancelClicked: boolean = false;

  totalProjects = [
    {projectname:"Greenlands",subject:"Documents",shippedBy:"David",dateShipped:"2020-09-10",provider:"FedEx",reference:"10121457",status:"view",eta:"2020-10-21",perCompletion:"20%",taskStatus:"Production", targetDate: "12-03-2021", status1: "active"},
    {projectname:"ITC Kakatiya",subject:"Fragile material",shippedBy:"Stokes",dateShipped:"2020-09-20",provider:"UPS inc.",reference:"10245787",status:"view",eta:"2020-10-21",perCompletion:"50%",taskStatus:"Concept",targetDate: "15-03-2021",status1: "active"},
    {projectname:"Taj Group",subject:"Confidential documents",shippedBy:"Woakes",dateShipped:"2020-09-25",provider:"Purolator",reference:"20154787",status:"view",eta:"2020-10-25",perCompletion:"75%",taskStatus:"Engineering", targetDate: "25-03-2021",status1: "active"},
    {projectname:"Transreport",subject:"Documents",shippedBy:"Archer",dateShipped:"2020-09-26",provider:"OnTrac Inc.",reference:"23651474",status:"view",eta:"2020-10-29",perCompletion:"5%",taskStatus:"Design", targetDate: "30-03-2021",status1: "active"},
    {projectname:"PermiShare",subject:"Fragile material",shippedBy:"Watson",dateShipped:"2020-09-26",provider:"Purolator",reference:"36214145",status:"view",eta:"2020-11-01",perCompletion:"90%",taskStatus:"Pilot", targetDate: "10-04-2021",status1: "active"},
    ]

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
