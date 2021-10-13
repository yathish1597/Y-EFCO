import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';
import {GridColumnsProjectsDialogComponent} from './grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import {ContractsDialogComponent} from './contracts-dialog/contracts-dialog.component';

@Component({
  selector: 'app-kbpl-projects',
  templateUrl: './kbpl-projects.component.html',
  styleUrls: ['./kbpl-projects.component.scss']
})
export class KbplProjectsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public pageSize = 5;
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
    {contracts:"5",projectname:"Raheja",projectcode:"EAI",contractor:"GV Contracors",contact:"Anup",email:"anup@eai.com",phone:"9978515470",address:"Sector 42",city:"Gurgram",state:"Haryana",contratcs:"8",date:"15-12-2019",status:"Initial"},
    {contracts:"5",projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",contratcs:"15",date:"19-11-2019",status:"On Hold"},
    {contracts:"5",projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",contratcs:"12",date:"04-11-2019",status:"Completed"},
    {contracts:"5",projectname:"Dr.Reddy's",projectcode:"VSF",contractor:"HBVC Systems",contact:"Angad",email:"angad@vsf.com",phone:"9976829180",address:"Vijay Nagar",city:"Bangalore",state:"Karnataka",contratcs:"15",date:"19-11-2019",status:"On Hold"},
    {contracts:"5",projectname:"Reva Group",projectcode:"RVG",contractor:"ABC Contractors",contact:"Arnab",email:"arnab@rvg.com",phone:"7760002206",address:"Bandra",city:"Mumbai",state:"Maharastra",contratcs:"12",date:"04-11-2019",status:"Completed"}



  ]

  openGridColumnsDialog(){
    this.dialog.open(GridColumnsProjectsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openAddProjectDialog(){
    this.dialog.open(AddProjectDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }

}
