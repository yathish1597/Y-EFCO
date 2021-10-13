import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valveparts =[
    {valvePart:"Body"},
    {valvePart:"Bonnet"},
    {valvePart:"Flange - Inlet"},
    {valvePart:"Flange - Outlet"},
{valvePart:"Handwheel / Gear box"},
    {valvePart:"Studs & Nuts"},
    {valvePart:"Stem (Spindle)"},
    {valvePart:"Seat - Inlet"},
 {valvePart:"Seat - Outlet"},
    {valvePart:"Disc / Wedge / Ball Inlet"},
    {valvePart:"Disc / Wedge / Ball Outlet"},
    {valvePart:"Back Seat"},
 {valvePart:"Gland packing / Soft seals"},
    {valvePart:"Yoke nut"},
    {valvePart:"Gland Bush"},
    {valvePart:"Gland Follower"},
 {valvePart:"I-Bolts"},
    {valvePart:"Gasket / Pressure Seal Ring"},


  ]

}
