import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-masterdata-new',
  templateUrl: './masterdata-new.component.html',
  styleUrls: ['./masterdata-new.component.scss']
})
export class MasterdataNewComponent implements OnInit {

  constructor(private titleService: Title) { }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setTitle("EFCO | Admin | Master Data");
  }

}
