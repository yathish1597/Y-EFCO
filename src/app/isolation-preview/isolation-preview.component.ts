import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-isolation-preview',
  templateUrl: './isolation-preview.component.html',
  styleUrls: ['./isolation-preview.component.scss'],
  
})
export class IsolationPreviewComponent implements OnInit {

  constructor( public router:Router, public titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {

    this.setTitle("EFCO | ISOLATION_VALVE PREVIEW");

    var  url=  this.router.createUrlTree(['isolation_preview']);
    window.open(url.toString(), '_blank')
  }

  // Method to download pdf
  public captureScreen()
  {
  var data = document.getElementById('contentToConvert');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 250;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight -50;
    pdf.addPage();
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    }
  pdf.save('Isolation_valve_preview.pdf'); // Generated PDF
  });
  }
  
}
