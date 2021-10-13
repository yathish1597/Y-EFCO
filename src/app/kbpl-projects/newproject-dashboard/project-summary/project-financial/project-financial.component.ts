import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-financial',
  templateUrl: './project-financial.component.html',
  styleUrls: ['./project-financial.component.scss']
})
export class ProjectFinancialComponent implements OnInit {
  constructor(public dialog: MatDialog,private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
    this.setTitle("EFCO | Summary Report | Financial");

  }

  
  // addActivity()
  // {
  //   let dialogRef = this.dialog.open(AddActivityComponent,{
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data =>{})
  // }

  tableItems=[
    {task:'Drafting', actions:3, completed:2, budget:1100, actual: 890, hours: 30, expenses:110, quoted:2500, awarded:2200, paid: 1700, status: 'Active', profit: 500},
    {task:'Adminstration', actions:9, completed:8, budget:1200, actual: 950, hours: 29, expenses:133, quoted:2330, awarded:2000, paid: 1000, status: 'Active', profit: 1000},
    {task:'Research', actions:22, completed:10, budget:1230, actual: 340, hours: 19, expenses:120, quoted:2320, awarded:1900, paid: 1500, status: 'Active', profit: 400},
    {task:'Field', actions:2, completed:2, budget:1540, actual: 1030, hours: 20, expenses:430, quoted:1100, awarded:1000, paid: 900, status: 'Active', profit: 100},
    {task:'Quality Control', actions:8, completed:2, budget:1130, actual: 1190, hours: 30, expenses:220, quoted:3300, awarded:2200, paid: 1700, status: 'Active', profit: 500},
  ]


  updateNewLead(item:any) {
    console.log(item, 'item');
    delete item['meeting_time']
    if (item['potential'] == 0) {
      item['potential'] = 1;
      item["toolT"] = "Completed";
    } else if (item['potential'] == 1) {
      item['potential'] = 2;
      item["toolT"] = "In Process";
    } else if (item['potential'] == 2) {
      item['potential'] = 3;
      item["toolT"] = "On Hold";
    } else if (item['potential'] == 3) {
      item['potential'] = 4;
      item["toolT"] = "Cancelled";
    } else if (item['potential'] == 4) {
      item['potential'] = 1;
    }
  
  }

  files = [
    {
      "label": "Sector 56",
      "children": [
        {
          "label": "- Landscaping"
        },
        {
          "label": "- Club House"
        }
      ]
    }, 
    {
      "label": "Lansdowne",
      "children": [
        {
          "label": "- Restaurant"
        },
        {
          "label": "- Parking Lot"
        }
      ]
    },
    {
      "label": "Newton",
      "children": [
        {
          "label": "- Tower A"
        },
        {
          "label": "- Tower B"
        },
        {
          "label": "- Tower C"
        },
        {
          "label": "- Common Facilities"
        }
      ]
    }
  ];



  


}

