import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-progress',
  templateUrl: './project-progress.component.html',
  styleUrls: ['./project-progress.component.scss']
})
export class ProjectProgressComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
    this.setTitle("EFCO | Summary Report | Progress");
  }

  
  // addActivity()
  // {
  //   let dialogRef = this.dialog.open(AddActivityComponent,{
  //     height: 'auto',
  //     width: '700px'
  //   });
  //   dialogRef.afterClosed().subscribe(data =>{})
  // }

  items = [
    {task:'Drafting',action:3, done:2, dueDate:"12/Dec/22", startDate:"11/Jan/21", role:"Engineer", owner:"Adani", potential:"1", eta:28, toolT:"Completed",  "Status": 1, stageColour: '#00ff0040'},
    {task:'Planning',action:9, done:8, dueDate:"16/Aug/22", startDate:"23/Aug/21", role:"Accountant", owner:"Ambani", potential:"1", eta:41, toolT:"Completed",  "Status": 1, stageColour: '#00ff0040'},
    {task:'Research',action:22, done:10, dueDate:"22/Oct/22", startDate:"05/Oct/21", role:"BA", owner:"Adani", potential:"1", eta:23, toolT:"Completed", "Status": 4, stageColour: '#FFA50069'},
    {task:'Administration',action:2, done:2, dueDate:"29/Nov/22", startDate:"19/Nov/21", role:"Architector", owner:"Ambani", potential:"1", eta:19, toolT:"Completed",  "Status": 3, stageColour: '#87CEFA'},
    {task:'Management',action:8, done:2, dueDate:"08/Feb/22", startDate:"13/Feb/21", role:"Designer", owner:"Ambani", potential:"1", eta:12, toolT:"Completed",  "Status": 2, stageColour: '#C0C0C0'},
  ];


  statusOptions = [
    { value: 1, name: 'Completed', colorCode: '#00ff0040' },
    { value: 2, name: 'Pending', colorCode: '#C0C0C0' },
    { value: 3, name: 'In Process', colorCode: '#87CEFA' },
    { value: 4, name: 'On Hold', colorCode: '#FFA50069' },
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

  
  changeProgress( value,i) {


      if (!value || value == 0) {
        this.items[i]['focus'] = 25;
      } else if (value == 25) {
        this.items[i]['focus'] = 50;
      } else if (value == 50) {
        this.items[i]['focus'] = 75;
      } else if (value == 75) {
        this.items[i]['focus'] = 100;
      } else {
        this.items[i]['focus'] = 0;
      }
    }

  


}

