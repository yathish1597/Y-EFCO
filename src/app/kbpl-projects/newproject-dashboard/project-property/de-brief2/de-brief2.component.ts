import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-brief2',
  templateUrl: './de-brief2.component.html',
  styleUrls: ['./de-brief2.component.scss']
})
export class DeBrief2Component implements OnInit {

  constructor() { }

  allFields = [1];
  removeItem(index){
    this.allFields.splice(index, 1);
  }

  items=[{siteissue:'Were the tickets and travel arrangement made on time '},
    {siteissue:'Was the plan of work given at factory'},
    {siteissue:'Were the gate pass formalities given at factory			    '},
    {siteissue:'Were complete tools and machines given for the site    '},
    {siteissue:'Was enough manpower provided for the site			    '},
    {siteissue:'Has the customer given proper spares for the valves			    '},
    {siteissue:'Was the customer helpful			    '},
    {siteissue:'Site problems were settled quickly by customer or EFCO			    '},
    {siteissue:'Was workshop facilities given by customer			    '},
    {siteissue:'Was there any local personnel problem.			    '},
    {siteissue:'For any other additional points, please enter below			    '}
  ];
  
  remove(e) {
    document.getElementById("repeat-" + e).remove();
  }
  ngOnInit() {
  }

}
