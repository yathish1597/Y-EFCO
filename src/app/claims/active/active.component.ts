import { Component, OnInit } from '@angular/core';
import { PageEvent, MatDialog } from '@angular/material';
import { AcceptModelComponent } from './accept-model/accept-model.component';
import { AttachmentModelComponent } from './attachment-model/attachment-model.component';
import { ClaimModelComponent } from './claim-model/claim-model.component';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
    public currentPage = 0;
    public totalSize = 0;
  filterToggle= false

  constructor(public dialog: MatDialog) { }

  public selected = 0;

  // {contracts:"Test",projectmanager:"APM 1028", eta:28, stageColour: '#00ff0040',"Status": 1,projectname:"Adani kawai",contact:"anup",email:"anup@eai.com",phone:"9978515470",startDate:"02-09-2020",targetDate:"02-09-2020",date:"15-Dec-2019",jobcard:0 , team: 1,status:"Initial"},
  // {contracts:"Safety",projectmanager:"APM 1032", eta:31,  stageColour: '#C0C0C0',"Status": 2,projectname:"Talwandi saboo",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 3, team:0 ,status:"On Hold"},
  // {contracts:"Servicing of safety valves",projectmanager:"APM 1022", eta:45,  stageColour: '#87CEFA',"Status": 3,projectname:"Balco",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard: 1, team: 3,status:"Completed"},
  // {contracts:"Servicing of safety valves",projectmanager:"APM 1034", eta:19,  stageColour: '#FFA50069',"Status": 4,projectname:"HINDALCO",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 2, team:2 ,status:"On Hold"},
  // {contracts:"Servicing of hp control valves",projectmanager:"APM 1043", eta:21,  stageColour: '#C0C0C0',"Status": 2,projectname:"NTPC rihand",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard:0 , team: 1,status:"Completed"}
  values = [
   
    {referenceNo : "CLAIM0225", category: "Xerox", user: "Vijay Surya", projectCode: "APM1 028", attachments: "1", approvalStatus :"-", amount: "200", approvalamount: "200",stageColour: '#00ff0040',"Status": 1,status:"Initial" },
    {referenceNo : "CLAIM0224", category: "Consumables", user: "Debasis Pattnaik", projectCode: "APM1 034", attachments: "3", approvalStatus :"-", amount: "8996", approvalamount: "8996" , stageColour: '#C0C0C0',"Status": 2,status:"On Hold"},
    {referenceNo : "CLAIM0223", category: "Miscellanous", user: "Lokesh Kumar", projectCode: "APM1 032", attachments: "1", approvalStatus :"-", amount: "450", approvalamount: "200", stageColour: '#87CEFA',"Status": 3,status:"Completed" },
    {referenceNo : "CLAIM0222", category: "Travel", user: "Lokesh Kumar", projectCode: "APM1 012", attachments: "1", approvalStatus :"-", amount: "694", approvalamount: "500", stageColour: '#FFA50069',"Status": 4,status:"On Hold" },
    {referenceNo : "CLAIM0221", category: "Police/Security", user: "Lokesh Kumar", projectCode: "APM1 023", attachments: "0", approvalStatus :"-", amount: "5400", approvalamount: "5400", stageColour: '#C0C0C0',"Status": 2,status:"Completed" },
    {referenceNo : "CLAIM0220", category: "Consumables", user: "Sai Aswanth", projectCode: "APM1 028", attachments: "2", approvalStatus :"-", amount: "500", approvalamount: "500",stageColour: '#00ff0040',"Status": 1,status:"Initial"  },
    {referenceNo : "CLAIM0219", category: "Lodge/Quarters/Room Fare", user: "Sai Aswanth", projectCode: "APM1 028", attachments: "1", approvalStatus :"-", amount: "1200", approvalamount: "1200"  , stageColour: '#C0C0C0',"Status": 2,status:"On Hold" },
    {referenceNo : "CLAIM0218", category: "Medical", user: "Srinivasa Reddy", projectCode: "APM1 019", attachments: "1", approvalStatus :"-", amount: "1600", approvalamount: "1600" , stageColour: '#87CEFA',"Status": 3,status:"Completed"  },
    {referenceNo : "CLAIM0210", category: "Local Conveyance", user: "Srinivasa Reddy", projectCode: "APM1 032", attachments: "1", approvalStatus :"-", amount: "1089", approvalamount: "1089" , stageColour: '#C0C0C0',"Status": 2,status:"Completed" },


  ]

  ngOnInit() {
  }

  openClientDialog(stat) {
    let dialogRef = this.dialog.open(AttachmentModelComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
      autoFocus: false
    });
 }
  openCreateClient(stat){
    let dialogRef = this.dialog.open(ClaimModelComponent, {
      data: stat,
      height: 'auto',
      width: '920px',
      autoFocus: false
    });
  }
  openAcceptDialog() {
    let dialogRef = this.dialog.open(AcceptModelComponent, {
      data: null,
      height: 'auto',
      width: '500px',
      autoFocus: false
    });
  }
  statusOptions = [
  {value:1, name: 'Initiated', colorCode: '#00ff0040'},
  {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
  {value:3, name: 'In Process', colorCode: '#87CEFA'},
  {value:4, name: 'On Hold', colorCode: '#FFA50069'},
]


}
