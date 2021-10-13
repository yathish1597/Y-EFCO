import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import {AddProjectDialogComponent} from '../add-project-dialog/add-project-dialog.component';
import {GridColumnsProjectsDialogComponent} from '../grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import {ContractsDialogComponent} from '../contracts-dialog/contracts-dialog.component';
import { AddNotesContractorsComponent } from './add-notes-contractors/add-notes-contractors.component';
import { ShowIssueComponent } from './show-issue/show-issue.component';
import { Title } from '@angular/platform-browser';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-projects-gridview',
  templateUrl: './projects-gridview.component.html',
  styleUrls: ['./projects-gridview.component.scss']
})
export class ProjectsGridviewComponent implements OnInit {

  viewer:any;
  DemoDoc:any;
  constructor(public dialog: MatDialog,private titleService: Title) { }
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
     this.viewer = 'google';  
    this.DemoDoc="https://docs.google.com/document/d/0B71LNA0JBMtWU0xzdnNvX3ljanFkOHB1Tmp1LVdUU1VTQ3BZ/edit?resourcekey=0-Pg-hAFK_6EAGXnOv60pzrg"  
    this.setTitle("EFCO | Job Orders");

  }

  public pageSize = 5; 
  public currentPage = 0;
  public totalSize = 0;

  filterToggle:boolean = false;

  values = [
   

    {contracts:"Test",projectmanager:"APM 1028", eta:28, stageColour: '#00ff0040',"Status": 1,projectname:"Adani kawai",contact:"anup",email:"anup@eai.com",phone:"9978515470",startDate:"02-09-2020",targetDate:"02-09-2020",date:"15-Dec-2019",jobcard:0 , team: 1,status:"Initial", notes: "Notes will be displayed in this Column"},
    {contracts:"Safety",projectmanager:"APM 1032", eta:31,  stageColour: '#C0C0C0',"Status": 2,projectname:"Talwandi saboo",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 3, team:0 ,status:"On Hold", notes: "Notes will be displayed in this Column"},
    {contracts:"Servicing of safety valves",projectmanager:"APM 1022", eta:45,  stageColour: '#87CEFA',"Status": 3,projectname:"Balco",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard: 1, team: 3,status:"Completed", notes: "Notes will be displayed in this Column"},
    {contracts:"Servicing of safety valves",projectmanager:"APM 1034", eta:19,  stageColour: '#FFA50069',"Status": 4,projectname:"HINDALCO",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 2, team:2 ,status:"On Hold", notes: "Notes will be displayed in this Column"},
    {contracts:"Servicing of hp control valves",projectmanager:"APM 1043", eta:21,  stageColour: '#C0C0C0',"Status": 2,projectname:"NTPC rihand",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard:0 , team: 1,status:"Completed", notes: "Notes will be displayed in this Column"}



  ]



  openGridColumnsDialog(){
    this.dialog.open(GridColumnsProjectsDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openAddProjectDialog(id){
    this.dialog.open(AddProjectDialogComponent,{
      data:id,
      width:"600px",
      height:"auto"
    })
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

  downloadPdf() {
    const pdfUrl = './assets/data/Work Progress Report.xlsx';
    const pdfName = 'Work Progress Report';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  AddProjectNotes() {
    const dialogRef = this.dialog.open(AddNotesContractorsComponent, {
      
      autoFocus: false,
      height: 'auto',
      width: '600px', 
      
    });
  }

  openContractsDialog(){
    this.dialog.open(ContractsDialogComponent,{
      width:"500px",
      height:"auto"
    })
  }

  initiated:any;
  awarded:any;
  inprocess:any;
  onhold:any;

  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
    {value:3, name: 'In Process', colorCode: '#87CEFA'},
    {value:4, name: 'On Hold', colorCode: '#FFA50069'},
  ]

   opendocs() {
    let dialogRef = this.dialog.open(ShowIssueComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
    
  changeProgress( value,i) {


    if (!value || value == 0) {
      this.values[i]['focus'] = 25;
    } else if (value == 25) {
      this.values[i]['focus'] = 50;
    } else if (value == 50) {
      this.values[i]['focus'] = 75;
    } else if (value == 75) {
      this.values[i]['focus'] = 100;
    } else {
      this.values[i]['focus'] = 0;
    }
  }
}
