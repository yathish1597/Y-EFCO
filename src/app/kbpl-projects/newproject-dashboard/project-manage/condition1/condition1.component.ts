import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition1',
  templateUrl: './condition1.component.html',
  styleUrls: ['./condition1.component.scss']
})
export class Condition1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
}
