import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.scss']
})
export class RepairDetailsComponent implements OnInit {

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
