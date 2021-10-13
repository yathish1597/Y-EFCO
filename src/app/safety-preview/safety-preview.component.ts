import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Component({
  selector: 'app-safety-preview',
  templateUrl: './safety-preview.component.html',
  styleUrls: ['./safety-preview.component.scss']
})
export class SafetyPreviewComponent implements OnInit {

  constructor(public titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {

    this.setTitle("EFCO | SAFETY_VALVE PREVIEW");
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
    position = heightLeft - imgHeight-60;
    pdf.addPage();
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight ;
    }
  pdf.save('Safety_valve_preview.pdf'); // Generated PDF
  });
  }

}
