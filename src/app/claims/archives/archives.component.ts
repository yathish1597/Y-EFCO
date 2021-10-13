import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ArchivesAttachmentPopupComponent } from '../archives-attachment-popup/archives-attachment-popup.component';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  public pageSize = parseInt(localStorage.getItem('settings') ? localStorage.getItem('settings') : '10');
  public currentPage = 0;
  public totalSize = 0;
  filterToggle = false
  constructor(public dialog:MatDialog) { }


  public selected = 0;
  values = [
    
   
    {referenceNo : "CLAIM0222", category: "Travel", user: "Lokesh Kumar", projectCode: "APM1 012", attachments: "1", approvalStatus :"-", amount: "694", approvalamount: "500", stageColour: '#FFA50069',"Status": 4,status:"On Hold" },
    {referenceNo : "CLAIM0221", category: "Police/Security", user: "Lokesh Kumar", projectCode: "APM1 023", attachments: "0", approvalStatus :"-", amount: "5400", approvalamount: "5400", stageColour: '#C0C0C0',"Status": 2,status:"Completed" },
    {referenceNo : "CLAIM0225", category: "Xerox", user: "Vijay Surya", projectCode: "APM1 028", attachments: "1", approvalStatus :"-", amount: "200", approvalamount: "200",stageColour: '#00ff0040',"Status": 1,status:"Initial" },
    {referenceNo : "CLAIM0218", category: "Medical", user: "Srinivasa Reddy", projectCode: "APM1 019", attachments: "1", approvalStatus :"-", amount: "1600", approvalamount: "1600" , stageColour: '#87CEFA',"Status": 3,status:"Completed"  },
    {referenceNo : "CLAIM0210", category: "Local Conveyance", user: "Srinivasa Reddy", projectCode: "APM1 032", attachments: "1", approvalStatus :"-", amount: "1089", approvalamount: "1089" , stageColour: '#C0C0C0',"Status": 2,status:"Completed" },
    {referenceNo : "CLAIM0224", category: "Consumables", user: "Debasis Pattnaik", projectCode: "APM1 034", attachments: "3", approvalStatus :"-", amount: "8996", approvalamount: "8996" , stageColour: '#C0C0C0',"Status": 2,status:"On Hold"},
    {referenceNo : "CLAIM0223", category: "Miscellanous", user: "Lokesh Kumar", projectCode: "APM1 032", attachments: "1", approvalStatus :"-", amount: "450", approvalamount: "200", stageColour: '#87CEFA',"Status": 3,status:"Completed" },
    {referenceNo : "CLAIM0220", category: "Consumables", user: "Sai Aswanth", projectCode: "APM1 028", attachments: "2", approvalStatus :"-", amount: "500", approvalamount: "500",stageColour: '#00ff0040',"Status": 1,status:"Initial"  },
    {referenceNo : "CLAIM0219", category: "Lodge/Quarters/Room Fare", user: "Sai Aswanth", projectCode: "APM1 028", attachments: "1", approvalStatus :"-", amount: "1200", approvalamount: "1200"  , stageColour: '#C0C0C0',"Status": 2,status:"On Hold" },
  ]

  ngOnInit() {
  }

  openClientDialog(stat) {
    let dialogRef = this.dialog.open(ArchivesAttachmentPopupComponent, {
      data: stat,
      height: 'auto',
      width: '600px',
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
