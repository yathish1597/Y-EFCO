import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddDocumentComponent } from './add-document/add-document.component';
import { AddPreviousComponent } from './add-previous/add-previous.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';

@Component({
  selector: 'app-project-document',
  templateUrl: './project-document.component.html',
  styleUrls: ['./project-document.component.scss']
})
export class ProjectDocumentComponent implements OnInit {

  constructor(public dialog: MatDialog,private titleService: Title) { }
  filterToggle = false;
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  ngOnInit() {
    this.setTitle("EFCO | Documents");

  }

  // items = [
  //   { doc: "Culinary Build (Recipe Card)",variantRef:'FLC/2019/05/0031/1',variantName:'Standup Pouch',des:'Document for updated Indation process',verNum:'2.3',curVer: "View", preVer: "8", verRem: "Verified By Mr.Stokes",},
  //   { doc: "Provide Estimated Forecast",variantRef:'FLC/2019/05/0032/1',variantName:'Coffee Mug',des:'Lastest forecast report from head office',verNum:'1.2',curVer: "View", preVer: "6", verRem: "Latest Document",},
  //   { doc: "NFP / Labels",variantRef:'FLC/2019/05/0033/1',variantName:'Jar',des:'NFP lables for shippings',verNum:'2.5',curVer: "View", preVer: "10", verRem: "Needs Verification",},
  //   { doc: "RFP & Analysis",variantRef:'FLC/2019/05/0034/1',variantName:'Standup Pouch',des:'RPF analysis for shipments through public sectors',verNum:'3.8',curVer: "View", preVer: "14", verRem: "-",},
  //   { doc: "Finalize Assortment",variantRef:'FLC/2019/05/0035/1',variantName:'Coffee Mug',des:'Assortment sheet for FFL Shipments',verNum:'1.1',curVer: "View", preVer: "5", verRem: "Verified by Mr.David",},
  //   { doc: "Provide Match Samples (to Culinary & CFT)",variantRef:'FLC/2019/05/0036/1',variantName:'Jar',des:'Match sample report from government',verNum:'2.9',curVer: "View", preVer: "10", verRem: "Needs Verification",},
  //   { doc: "Shelf Life Testing",variantRef:'FLC/2019/05/0037/1',variantName:'Coffee Mug',des:'Testing protocols for shipments through air',verNum:'3.2',curVer: "View", preVer: "8", verRem: "-",},
  //   { doc: "Finilize Assortment",variantRef:'FLC/2019/05/0038/1',variantName:'Jar',des:'NFP lables for shippings',verNum:'4,7',curVer: "View", preVer: "19", verRem: "Needs Verification",},

  // ]

     items = [
    { doc: "Isolation of Equipment Containing H2S",variantRef:'FLC/2019/05/0031/1',variantName:'Engineering and Operations',des:'Document for updated Indation process',verNum:'2.3',curVer: "View", preVer: "8", verRem: "Verified By Mr.Stokes",},
    { doc: "Isolation of Process Equipment",variantRef:'FLC/2019/05/0032/1',variantName:'Engineering and Operations',des:'Lastest forecast report from head office',verNum:'1.2',curVer: "View", preVer: "6", verRem: "Latest Document",},
    { doc: "NFP / Labels",variantRef:'FLC/2019/05/0033/1',variantName:'Field Monitoring',des:'NFP lables for shippings',verNum:'2.5',curVer: "View", preVer: "10", verRem: "Needs Verification",},
    { doc: "RFP & Analysis",variantRef:'FLC/2019/05/0034/1',variantName:'Procurement Procedure',des:'RPF analysis for shipments through public sectors / Clients',verNum:'3.8',curVer: "View", preVer: "14", verRem: "-",},
    { doc: "Finalize Assortment",variantRef:'FLC/2019/05/0035/1',variantName:'On Site Procedures',des:'Assortment sheet for FFL Shipments',verNum:'1.1',curVer: "View", preVer: "5", verRem: "Verified by Mr.David",},
    { doc: "Provide Match Samples",variantRef:'FLC/2019/05/0036/1',variantName:'References for Parts',des:'Match sample report from government',verNum:'2.9',curVer: "View", preVer: "10", verRem: "Needs Verification",},
    { doc: "Corrosion Testing",variantRef:'FLC/2019/05/0037/1',variantName:'NDT Technics',des:'Testing with various Non distructive technics are reported',verNum:'3.2',curVer: "View", preVer: "8", verRem: "-",},
    { doc: "Bluematch Procedure",variantRef:'FLC/2019/05/0038/1',variantName:'Service Standards',des:'Standard procedures for testing are documented',verNum:'4,7',curVer: "View", preVer: "19", verRem: "Needs Verification",},

  ]

  public openpreviousDialog(id) {
    let dialogRef = this.dialog.open(AddPreviousComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  public openNewDialog(id) {
    let dialogRef = this.dialog.open(UploadDocumentComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
  
  public openUserDialog(id) {
    let dialogRef = this.dialog.open(AddDocumentComponent, {
      data: id,
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

  opencontactDialog1(){
    let dialogRef = this.dialog.open(EditDocumentComponent, {
      height: 'auto',
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }

}
