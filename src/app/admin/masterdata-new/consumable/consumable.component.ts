import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddConsumableComponent } from './add-consumable/add-consumable.component';

@Component({
  selector: 'app-consumable',
  templateUrl: './consumable.component.html',
  styleUrls: ['./consumable.component.scss']
})
export class ConsumableComponent implements OnInit {

  
items=[
  {slno:"1.",matcode:"2CWAG4025",description:"Cutting Wheels",size:"AG4",rate:"40",uom:"Nos"},
{slno:"2.",matcode:"2GWAG4060",description:"Grinding Wheels",size:"AG4",rate:"35",uom:"Nos"},
{slno:"3.",matcode:"2ABPA0003",description:"Lapping Paste",size:"Rough",rate:"166",uom:"Nos"},
{slno:"4.",matcode:"2ABPA0001",description:"Lapping Paste",size:"Fine",rate:"166",uom:"Nos"},
{slno:"5.",matcode:"2ABFO0080",description:"Lapping Papers",size:"80 Grit",rate:"372.83",uom:"Nos"},
{slno:"6.",matcode:"2ABFO0280",description:"Lapping Papers",size:"280 Grit",rate:"346",uom:"Nos"},
{slno:"7.",matcode:"2ABFO0500",description:"Lapping Papers",size:"500 Grit",rate:"346",uom:"Nos"},
{slno:"8.",matcode:"2ABFO1000",description:"Lapping Papers",size:"1000 Grit",rate:"346",uom:"Nos"},
{slno:"9.",matcode:"2EMWH0000",description:"Emery Bundle",size:"-",rate:"19.8",uom:"Nos"},
{slno:"10.",matcode:"2PABL0001",description:"Blue Paste",size:"-",rate:"50",uom:"Nos"},
{slno:"11.",matcode:"2FVKW0010",description:"Fevi quick",size:"-",rate:"21",uom:"Nos"},
{slno:"12.",matcode:"2WBWO0000",description:"Wire Brushes",size:"-",rate:"40",uom:"Nos"},
{slno:"13.",matcode:"2EMWH0000",description:"Emery buffing wheels",size:"-",rate:"50",uom:"Nos"},
{slno:"14.",matcode:"2ABST0002",description:"ARS Stones",size:"-",rate:"42",uom:"Nos"},
{slno:"15.",matcode:"2BLHA0180",description:"Hacksaw Blades",size:"-",rate:"45",uom:"Nos"},
{slno:"16.",matcode:"2GRGO0000",description:"Grinding Goggles",size:"-",rate:"46",uom:"Nos"},
{slno:"17.",matcode:"2GLCL0000",description:"Hand gloves",size:"-",rate:"16",uom:"Nos"},
{slno:"18.",matcode:"2MSNO0001",description:"Nose Masks",size:"-",rate:"35",uom:"Nos"},
{slno:"19.",matcode:"5STPM0001",description:"Permanent Marker",size:"-",rate:"18",uom:"Nos"},
{slno:"20.",matcode:"5STCP0002",description:"Whitener",size:"-",rate:"21",uom:"Nos"},
{slno:"21.",matcode:"5WPMK0001",description:"White Paint Marker",size:"-",rate:"45",uom:"Nos"}
]

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openActionTypeDialog(value) {
    let dialogRef = this.dialog.open(AddConsumableComponent, {
      data: value,
      height: 'auto',
      width: '600px',
  });
  }

}
