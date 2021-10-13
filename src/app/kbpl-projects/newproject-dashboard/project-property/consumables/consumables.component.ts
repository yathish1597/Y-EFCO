import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumables',
  templateUrl: './consumables.component.html',
  styleUrls: ['./consumables.component.scss']
})
export class ConsumablesComponent implements OnInit {

  constructor() { }
  items=[
    {slno:"1.",matcode:"2CWAG4025",description:"Cutting Wheels",size:"AG4",rate:"40",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"2.",matcode:"2GWAG4060",description:"Grinding Wheels",size:"AG4",rate:"35",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"3.",matcode:"2ABPA0003",description:"Lapping Paste",size:"Rough",rate:"166",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"4.",matcode:"2ABPA0001",description:"Lapping Paste",size:"Fine",rate:"166",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
 {slno:"5.",matcode:"2ABFO0080",description:"Lapping Papers",size:"80 Grit",rate:"372.83",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"6.",matcode:"2ABFO0280",description:"Lapping Papers",size:"280 Grit",rate:"346",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"7.",matcode:"2ABFO0500",description:"Lapping Papers",size:"500 Grit",rate:"346",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"8.",matcode:"2ABFO1000",description:"Lapping Papers",size:"1000 Grit",rate:"346",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
 {slno:"9.",matcode:"2EMWH0000",description:"Emery Bundle",size:"-",rate:"19.8",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"10.",matcode:"2PABL0001",description:"Blue Paste",size:"-",rate:"50",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"11.",matcode:"2FVKW0010",description:"Fevi quick",size:"-",rate:"21",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"12.",matcode:"2WBWO0000",description:"Wire Brushes",size:"-",rate:"40",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
 {slno:"13.",matcode:"2EMWH0000",description:"Emery buffing wheels",size:"-",rate:"50",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"14.",matcode:"2ABST0002",description:"ARS Stones",size:"-",rate:"42",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"15.",matcode:"2BLHA0180",description:"Hacksaw Blades",size:"-",rate:"45",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"16.",matcode:"2GRGO0000",description:"Grinding Goggles",size:"-",rate:"46",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
 {slno:"17.",matcode:"2GLCL0000",description:"Hand gloves",size:"-",rate:"16",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"18.",matcode:"2MSNO0001",description:"Nose Masks",size:"-",rate:"35",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"19.",matcode:"5STPM0001",description:"Permanent Marker",size:"-",rate:"18",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
{slno:"20.",matcode:"5STCP0002",description:"Whitener",size:"-",rate:"21",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},
 {slno:"21.",matcode:"5WPMK0001",description:"White Paint Marker",size:"-",rate:"45",uom:"Nos",qissued:"",returned:"",qconsumed:"",aissued:"",aconsumed:""},];
  ngOnInit() {
  }

}
