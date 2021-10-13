import { animate, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { transferArrayItem, moveItemInArray, CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';

declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-action-board-view',
  templateUrl: './action-board-view.component.html',
  styleUrls: ['./action-board-view.component.scss'],
  providers: [DatePipe]
})

export class ActionBoardViewComponent implements OnInit {

  constructor(public dialog: MatDialog) {
   
  }
  
  public pageSize = 5; 
  public currentPage = 0;
  public totalSize = 0;

  values = [

    {contracts:"Test",projectmanager:"APM 1028", eta:28, stageColour: '#00ff0040',"Status": 1,projectname:"Adani kawai",contact:"anup",email:"anup@eai.com",phone:"9978515470",startDate:"02-09-2020",targetDate:"02-09-2020",date:"15-Dec-2019",jobcard:0 , team: 1,status:"Initial", notes: "Notes will be displayed in this column"},
    {contracts:"Safety",projectmanager:"APM 1032", eta:31,  stageColour: '#C0C0C0',"Status": 2,projectname:"Talwandi saboo",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 3, team:0 ,status:"On Hold", notes: "Notes will be displayed in this coloumn"},
    {contracts:"Servicing of safety valves",projectmanager:"APM 1022", eta:45,  stageColour: '#87CEFA',"Status": 3,projectname:"Balco",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard: 1, team: 3,status:"Completed", notes: "Notes will be displayed in this coloumn"},
    {contracts:"Servicing of safety valves",projectmanager:"APM 1034", eta:19,  stageColour: '#FFA50069',"Status": 4,projectname:"HINDALCO",contact:"angad",email:"angad@vsf.com",phone:"9976829180",startDate:"02-09-2020",targetDate:"02-09-2020",date:"19-Nov-2019",jobcard: 2, team:2 ,status:"On Hold", notes: "Notes will be displayed in this coloumn"},
    {contracts:"Servicing of hp control valves",projectmanager:"APM 1043", eta:21,  stageColour: '#C0C0C0',"Status": 2,projectname:"NTPC rihand",contact:"arnab",email:"arnab@rvg.com",phone:"7760002206",startDate:"02-09-2020",targetDate:"02-09-2020",date:"04-Nov-2019",jobcard:0 , team: 1,status:"Completed", notes: "Notes will be displayed in this coloumn"}



  ]
  statusOptions = [
    {value:1, name: 'Initiated', colorCode: '#00ff0040'},
    {value:2, name: 'Awarded', colorCode: '#C0C0C0'},
    {value:3, name: 'In Process', colorCode: '#87CEFA'},
    {value:4, name: 'On Hold', colorCode: '#FFA50069'},
  ]
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

 

  downloadPdf() {
    const pdfUrl = './assets/data/Work Progress Report.xlsx';
    const pdfName = 'Work Progress Report';
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }
  ngOnInit() {
  }


  

}
