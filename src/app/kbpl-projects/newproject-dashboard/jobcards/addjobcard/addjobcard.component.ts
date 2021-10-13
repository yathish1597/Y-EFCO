import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addjobcard',
  templateUrl: './addjobcard.component.html',
  styleUrls: ['./addjobcard.component.scss']
})
export class AddjobcardComponent implements OnInit {

  
  projectForm: FormGroup;
  employeetoggle:boolean=true;
  constructor(public fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public project: any ,public dialogRef: MatDialogRef<AddjobcardComponent>, public router:Router) { 
    this.createProjectDetails();
  }
  countries = [{'conuntry_id': 1,'conuntry_name': 'Construction'},
  {'conuntry_id': 2,'conuntry_name': 'Engineering'},
  {'conuntry_id': 3,'conuntry_name': 'Machine work'},
  ]
  
  States = [{'state_id': 1,'state_name': 'Nikhil'},
  {'state_id': 2,'state_name': 'Akhil Reddy'},
  {'state_id': 3,'state_name': 'Siva'},
  {'state_id': 4,'state_name': 'Sai'},
  {'state_id': 5,'state_name': 'Navin'},
  {'state_id': 6,'state_name': 'RK'}]

  clients = [
    {id:1,name:"Amazon"},
    {id:2,name:"Flipkart"},
    {id:3,name:"Ebay"},
    {id:4,name:"PermiShare"},
    {id:5,name:"Google"},
  ]
  employetoggle(){
   this.employeetoggle=!this.employeetoggle;
  }
  ngOnInit() {

  }

  catalogTitles = [
    {id:0, title:'Select'},
    {id:1, title:'Isolation Valve'},
    {id:2, title:'Safety Valve'},
   
  ]

  value=1 ;
  changeModel(value : any){
    this.value = value.id;
    console.log(this.value)
  }

  redirect(){
    if(this.value == 1){
      this.router.navigateByUrl("/joborders/joborder-dashboard/jobcard/jobcarddetails")
    }
    else{
      this.router.navigateByUrl("/joborders/joborder-dashboard/jobcard/jobcarddetails1")
    }
  }

  get contactName() { return this.projectForm.get('contactName'); }
  get jobTitle() { return this.projectForm.get('jobTitle'); }
  get contactNumber() { return this.projectForm.get('contactNumber'); }
  get contactEmail() { return this.projectForm.get('contactEmail'); }
  get streetAddress() { return this.projectForm.get('streetAddress'); }
  get Country() { return this.projectForm.get('Country'); }
  get State() { return this.projectForm.get('State'); }
  get City() { return this.projectForm.get('City'); }
  get postal() { return this.projectForm.get('postal'); }
  get invoice() { return this.projectForm.get('invoice'); }
  get awardDate() { return this.projectForm.get('awardDate'); }
  get agreement() { return this.projectForm.get('agreement'); }
  get agreementDate() { return this.projectForm.get('agreementDate'); }
  get dateOfStart() { return this.projectForm.get('dateOfStart'); }
  get targetDate() { return this.projectForm.get('targetDate'); }
  get estimatedBudget() { return this.projectForm.get('estimatedBudget'); }
  get Client() { return this.projectForm.get('Client'); }
  get address() { return this.projectForm.get('address'); }
  get email() { return this.projectForm.get('email'); }
  get department() { return this.projectForm.get('department'); }
  get engincharge() { return this.projectForm.get('engincharge'); }
  get consultantdetails() { return this.projectForm.get('consultantdetails'); }
  get associatedagency() { return this.projectForm.get('associatedagency'); }

    createProjectDetails() {
      this.projectForm = this.fb.group({
        contactName : new FormControl('' , [Validators.required]),
        jobTitle : new FormControl('' , [Validators.required]),
        contactNumber : new FormControl('' , [Validators.required]),
        contactEmail : new FormControl('' , [Validators.required ]),
        streetAddress : new FormControl('' , [Validators.required ]),
        Country : new FormControl('' , [Validators.required]),
        State : new FormControl('',[Validators.required]),
        City : new FormControl('',[Validators.required]),
        postal : new FormControl('',[Validators.required]),
        invoice : new FormControl('',[Validators.required]),
        awardDate : new FormControl('',[Validators.required]),
        agreement : new FormControl('',[Validators.required]),
        agreementDate : new FormControl('',[Validators.required]),
        dateOfStart : new FormControl('',[Validators.required]),
        targetDate : new FormControl('',[Validators.required]),
        estimatedBudget : new FormControl('',[Validators.required]),
        Client : new FormControl('',[Validators.required]),
        address : new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required]),
        department : new FormControl('',[Validators.required]),
        engincharge : new FormControl('',[Validators.required]),
        consultantdetails : new FormControl('',[Validators.required]),
        associatedagency : new FormControl('',[Validators.required]),
      })
    }
  
    close(): void {
      this.dialogRef.close();
    }


}
