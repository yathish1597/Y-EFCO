import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-man-days',
  templateUrl: './man-days.component.html',
  styleUrls: ['./man-days.component.scss']
})
export class ManDaysComponent implements OnInit {

  constructor() { }




  ngOnInit() {

    
  }

  data = [
    {empCode: 'E003', empName: 'SS REDDY'},
    {empCode: 'E247', empName: 'Vijaya Surya'},
    {empCode: 'E052', empName: 'Naveen kumar'},
    {empCode: 'E045', empName: 'MS Rao'},
    {empCode: 'E312', empName: 'Bhargav'},
    {empCode: 'E282', empName: 'Srikanth'},
    {empCode: 'L097', empName: 'Kundan Tiwari'},
    {empCode: 'L134', empName: 'IKRAMUDDIN'},
    {empCode: 'L194', empName: 'Rajendra Singh'},
    {empCode: 'L137', empName: 'SAYYAD ASHFEK AHMED '},
  ]

  add = [1];
  prefix = 1;
  tableheadings = [
    {heading: 'Half NA'},
    {heading: 'Full NA'},
    {heading: 'No. of Days'},
    {heading: 'DA'},
    {heading: 'TA'},
    {heading: 'Total Allowance'},
    
    
  ]

  tableheading2 = [
    {heading: 'DA Start Date'},
    

    
    
  ]



  updatingTables(){
    this.add.push(1)
    this.prefix = this.prefix+1;
    this.tableheadings.push(  {heading: 'Half NA'},
    {heading: 'Full NA'},
    {heading: 'No. of Days'},
    {heading: 'DA'},
    {heading: 'TA'},
    {heading: 'Total Allowance'},
    )

    document.getElementById('disappear').style.display= "none"

    
  }
  scrollGrid(side) {
    var ele = document.getElementById('grid-table-container');
    if (side == 'right')
        ele.scrollLeft += 210;
    else
        ele.scrollLeft -= 210;
  }

}
