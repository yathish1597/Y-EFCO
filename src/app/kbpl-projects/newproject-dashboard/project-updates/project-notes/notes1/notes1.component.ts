import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectAddNotesComponent } from '../project-add-notes/project-add-notes.component';

@Component({
  selector: 'app-notes1',
  templateUrl: './notes1.component.html',
  styleUrls: ['./notes1.component.scss']
})
export class Notes1Component implements OnInit {

  constructor(public dialog: MatDialog,) { }
  // items = [
  //   { date: '12-09-2020', site: 'Sector 56',contract:' Landscapin', task:'Admin', subject: "Backfilling",subBy:"Navin",des:"The process of refilling trenches or holes created during excavation, especially around foundations." },
  //   { date: '11-09-2020', site: 'Lansdowne',contract:' Club House', task:'Research', subject: "BIM",subBy:"Kenneth",des:"Building information modeling includes all details of that structure, from its basic layout to the smallest measurements." },
  //   { date: '21-12-2019', site: 'Newton',contract:'Restaurant', task:'Planning', subject: "Caulking",subBy:"John",des:" A flexible, rubbery type of material that is used to seal gaps in a joint." },
  //   { date: '30-11-2021', site: 'Newton',contract:'Parking Lot', task:'Quality Control', subject: "Ducts",subBy:"Mark",des:"Piping has issues in pumping air throughout a structure." },
  //   { date: '28-05-2021', site: 'Lansdowne',contract:'Club House', task:'Management', subject: "I-beam",subBy:"Don",des:"A beam that has a cross-section that looks like the capital letter I. Girders often have an I-beam cross-section." },
    
  // ]
  items = [

    { date: '21-12-2019', task:'Disassembly', subject: "Caulking",subBy:"Subba Rao",des:" Used motorized machinary for quick disassembly." },
    { date: '30-11-2021', task:'Cleaning', subject: "Corrosion of Parts",subBy:"Vijay Surya",des:"Valves has issues in pumping air throughout a structure." },
    { date: '12-09-2020', task:'Inspection', subject: "Backfilling",subBy:"Ramakrishna",des:"The process of refilling trenches or holes created during lapping, especially around surface." },
    { date: '28-05-2021', task:'Measuring', subject: "Pressure Testing",subBy:"Aswanth",des:"A blue match technique is used to test all issues and pressure settings are check for quality related issues." },
    { date: '11-09-2020', task:'Reassembly and Testing', subject: "BIM",subBy:"Vamshi",des:"All parts are placed as per diagram and a comprehensive testing for by pumping the fluid is carried out along with NDT techniques." },

    
  ]

  ngOnInit() {
  }

  addQuotesNotes(){
    let dialogRef = this.dialog.open(ProjectAddNotesComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }


}
