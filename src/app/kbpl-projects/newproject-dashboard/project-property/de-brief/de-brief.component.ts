import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-brief',
  templateUrl: './de-brief.component.html',
  styleUrls: ['./de-brief.component.scss']
})
export class DeBriefComponent implements OnInit {

  constructor() { }

  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
  allFields1 = [1];
  removeItem1(index){
    this.allFields1.splice(index, 1);
  }
  
  remove1(e) {
    document.getElementById("repeat-" + e).remove();
  }
  allFields2 = [1];
  removeItem2(index){
    this.allFields2.splice(index, 1);
  }
  
  remove2(e) {
    document.getElementById("repeat-" + e).remove();
  }
  ngOnInit() {
  }

}
