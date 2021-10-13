import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementsComponent } from './requirements/requirements.component';
import { RouterModule } from '@angular/router';
import { FinancialdetailsComponent } from './financialdetails/financialdetails.component';
import { DeBriefComponent } from './de-brief/de-brief.component';
import { DeBrief1Component } from './de-brief1/de-brief1.component'; 
import { OwlDateTimeModule } from 'ng-pick-datetime';
import { DeBrief2Component } from './de-brief2/de-brief2.component';
import { MatIcon, MatIconModule } from '@angular/material';
import { ConsumablesComponent } from './consumables/consumables.component';
import { SiteMonitorComponent } from './site-monitor/site-monitor.component';
import { ManDaysComponent } from './man-days/man-days.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DailyReportComponent } from './daily-report/daily-report.component';


export const routes = [
  { path: '', redirectTo: 'requirements', pathMatch: 'full' },
  { path: 'requirements', component: RequirementsComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'financial-details', component: FinancialdetailsComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'de-brief', component: DeBriefComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'de-brief1', component: DeBrief1Component, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'de-brief2', component: DeBrief2Component, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'consumables', component: ConsumablesComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'site-monitor', component:  SiteMonitorComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'man-days', component: ManDaysComponent, data: { breadcrumb: 'Plan Of Work' } },
  { path: 'daily-report', component: DailyReportComponent, data: { breadcrumb: 'Plan Of Work' } },



]
@NgModule({
  declarations: [RequirementsComponent, FinancialdetailsComponent, DeBriefComponent, DeBrief1Component, DeBrief2Component, ConsumablesComponent, SiteMonitorComponent, ManDaysComponent, DailyReportComponent],
  imports: [
    CommonModule,
    MatIconModule,
    OwlDateTimeModule ,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ProjectPropertyModule { }
