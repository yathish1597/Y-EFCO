import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-details1',
  templateUrl: './repair-details1.component.html',
  styleUrls: ['./repair-details1.component.scss']
})
export class RepairDetails1Component implements OnInit {

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

  scrollGrid(side) {

    var ele2 = document.getElementById('grid-table-container');
    if (side == 'right')
      { 
        ele2.scrollLeft += 210;}

    else
   {  
        ele2.scrollLeft -= 210;}
  }

  goToLink(url: string){
    window.open(url, "_blank");
}
}
