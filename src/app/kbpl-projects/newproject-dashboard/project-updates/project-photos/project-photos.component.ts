import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AddImageComponent } from './add-image/add-image.component';

@Component({ 
  selector: 'app-project-photos',
  templateUrl: './project-photos.component.html',
  styleUrls: ['./project-photos.component.scss']
})
export class ProjectPhotosComponent implements OnInit {

  item: MenuItem[];
  public firstexpand:boolean;


  constructor(public dialog: MatDialog,private titleService: Title, private router: Router ) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle("EFCO | Updates | Photos");
    if(this.router.url=='/joborders/joborder-dashboard/project-updates/photos/photos1'){
      this.firstexpand=true;
    }

    this.item = [ 
      {
      label: 'Job Orders',
      expanded: this.firstexpand,
      items: [
     
          {
            
              label: 'RAPK 1003-004',
              icon:'pi pi-angle-right',
              routerLink:'photos1'
          },
          {
            label: 'RAPK 1003-006',
            icon:' pi pi-angle-right',
            routerLink:'photos2'
          }
       
      ]
      },
      
  ]
  }
  public addNewImage(id){
    let dialogRef = this.dialog.open(AddImageComponent, {
      data: id,
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

  files = [
    {
      "label": "Sector 56 (36)",
      "children": [
        {
          "label": "- Landscaping (20)"
        },
        {
          "label": "- Club House (16)"
        }
      ]
    }, 
    {
      "label": "Lansdowne (34)",
      "children": [
        {
          "label": "- Restaurant (12)"
        },
        {
          "label": "- Parking Lot (22)"
        }
      ]
    },
    {
      "label": "Newton (40)",
      "children": [
        {
          "label": "- Tower A (10)"
        },
        {
          "label": "- Tower B (10)"
        },
        {
          "label": "- Tower C (10)"
        },
        {
          "label": "- Common Facilities (10)"
        }
      ]
    }
  ];
}
