import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit {
  
  count=1;
  condition;
  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  ngOnInit() {
    this.setTitle("EFCO | Service Reports");
  }


  data = [
    {location : "KSB 1004 - 001 BMD - CRH LHS", type: "Safety Valve", size: 6, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    {location : "KSB 1004 - 002 BMD - MS Line RHS", type: "Safety Valve", size: 4, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    {location : "KSB 1004 - 003 BMD - MS Line LHS", type: "Safety Valve", size: 4, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    {location : "KSB 1004 - 004 BMD - Startup Vent 1", type: "Globe", size: 4, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    {location : "KSB 1004 - 004 BMD - Startup Vent 2", type: "Globe", size: 4, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    {location : "KSB 1004 - 006 BMD - Soot Blower C/V", type: "Control Valve", size: 4, rating: 2500, workPerformed : "Dismantling done, Cleaning done, Disc Machining and ", rectified: "Yes", witness: ""},
    ]
  next(){
 
    if(this.count<=2){
      this.count++;
     
    }

  }

  
  previous(){
   
    if(this.count>1){
      this.count--;
  
    }
    
  }

 

  

  
}
