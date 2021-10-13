import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
 
@Component({
  selector: 'app-project-property',
  templateUrl: './project-property.component.html',
  styleUrls: ['./project-property.component.scss']
})
export class ProjectPropertyComponent implements OnInit {
  filterToggle: boolean;
  filterState: string;
  item: MenuItem[];

  constructor(private titleService: Title,  private router: Router ,) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  public firstexpand:boolean;

  ngOnInit() {
    if(this.router.url=='/joborders/joborder-dashboard/POW/requirements' || '/joborders/joborder-dashboard/POW/man-days'){
      this.firstexpand=true;
    }
    this.setTitle("EFCO | Plan of Work"); this.item = [
     
      {
        label: 'APM 1028',
        expanded:this.firstexpand,
        items: [
          {
            label: 'Requirements',
            icon: 'pi pi-angle-right',
            routerLink:'requirements'
          },
          {
            label: 'Financial Details',
            icon: 'pi pi-angle-right',
            routerLink: 'financial-details',
          },
          {
            label: 'De-Brief',
            icon: ' pi pi-angle-right',
            routerLink:'de-brief'
          },
          {
            label: 'Kick Off/De-brief-1',
            icon: 'pi pi-angle-right',
            routerLink:'de-brief1'
          },
          {
            label: 'Kick Off/De-brief-2',
            icon: 'pi pi-angle-right',
            routerLink:'de-brief2'
          },
          {
            label: 'Consumables',
            icon: 'pi pi-angle-right',
            routerLink:'consumables'
          },
          {
            label: 'Site Monitoring Report',
            icon: 'pi pi-angle-right',
            routerLink:'site-monitor'
          },
          {
            label: 'Man Days',
            icon: 'pi pi-angle-right',
            routerLink:'man-days'
          },
          {
            label: 'Job Execution', 
            icon: 'pi pi-angle-right',
            routerLink:'/joborders/joborder-dashboard/project-execution'
            
          },
          {
            label: 'Deposit',
            icon: 'pi pi-angle-right',
            routerLink:'/joborders/joborder-dashboard/deposit'
          },
          {
            label: 'Daily Report',
            icon: 'pi pi-angle-right',
            routerLink:'daily-report'
          },

        ]
      },

    ]
  }
  filterFunction() {
    this.filterToggle = !this.filterToggle;
    this.filterState = this.filterToggle === true ? 'initial' : 'final';
  }
}
