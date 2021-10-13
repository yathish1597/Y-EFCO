import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSiteComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

  catalogTitles = [
    {id:1, title:'Gland Packing'},
    {id:2, title:'Gaskets'},
    {id:3, title:'Pressure Seal Ring'},
    {id:4, title:'Other Seals'},
    {id:5, title:'Stud'},
    {id:6, title:'Nut'},
    {id:7, title:'Spring'},
   

  ]
  value=1 ;
  selectedTemplate(value : any){
    this.value = value.id;
    console.log(this.value)
  }


}
