import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PageEvent, MatDialog } from '@angular/material';
import { GlandpackingModelComponent } from './glandpacking-model/glandpacking-model.component';

@Component({
  selector: 'app-add-spare-model',
  templateUrl: './add-spare-model.component.html',
  styleUrls: ['./add-spare-model.component.scss']
})
export class AddSpareModelComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<AddSpareModelComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public dialog2: MatDialog ) { }

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

  addSpareModel(){
    let dialogRef2 = this.dialog2.open(GlandpackingModelComponent, {
      data: null,
      height: 'auto',
      width: '700px',
      autoFocus: false
    });
  }

  value=1 ;
  changeModel(value : any){
    this.value = value.id;
    console.log(this.value)
  }

  

}
