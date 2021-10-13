import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { ProjectAddNotesComponent } from './project-add-notes/project-add-notes.component';

@Component({
  selector: 'app-project-notes',
  templateUrl: './project-notes.component.html',
  styleUrls: ['./project-notes.component.scss']
})
export class ProjectNotesComponent implements OnInit {
  constructor(public dialog: MatDialog,private titleService: Title,
    private router: Router ) { }

    item: MenuItem[];
    public firstexpand:boolean;


  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    console.log("Title has changed!");
  }
  public filterToggle: boolean;

  items = [
    { date: '12-09-2020', site: 'Sector 56',contract:' Landscapin', task:'Admin', subject: "Backfilling",subBy:"Navin",des:"The process of refilling trenches or holes created during excavation, especially around foundations." },
    { date: '11-09-2020', site: 'Lansdowne',contract:' Club House', task:'Research', subject: "BIM",subBy:"Kenneth",des:"Building information modeling includes all details of that structure, from its basic layout to the smallest measurements." },
    { date: '21-12-2019', site: 'Newton',contract:'Restaurant', task:'Planning', subject: "Caulking",subBy:"John",des:" A flexible, rubbery type of material that is used to seal gaps in a joint." },
    { date: '30-11-2021', site: 'Newton',contract:'Parking Lot', task:'Quality Control', subject: "Ducts",subBy:"Mark",des:"Piping has issues in pumping air throughout a structure." },
    { date: '28-05-2021', site: 'Lansdowne',contract:'Club House', task:'Management', subject: "I-beam",subBy:"Don",des:"A beam that has a cross-section that looks like the capital letter I. Girders often have an I-beam cross-section." },
    
  ]

  ngOnInit() {
    this.setTitle("EFCO | Updates | Notes");
    if(this.router.url=='/joborders/joborder-dashboard/project-updates/notes/notes1'){
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
              routerLink:'notes1'
          },
          {
            label: 'RAPK 1003-006',
            icon:' pi pi-angle-right',
            routerLink:'notes2'
          }
       
      ]
      },
      
  ]

  }

  addQuotesNotes(){
    let dialogRef = this.dialog.open(ProjectAddNotesComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


  // 

}
