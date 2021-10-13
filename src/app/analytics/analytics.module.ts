import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartModule } from 'angular-highcharts';
import { RadarComponent } from './radar/radar.component';
// import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { DxGanttModule } from 'devextreme-angular';
import { JobComponent } from './job/job.component';
import { ClaimsComponent } from './claims/claims.component';
import { MatSortModule } from '@angular/material';


export const routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' }, 
  { path: 'jobs', component: JobComponent, data: { breadcrumb: 'Dashboard' }}, 
  { path: 'dailyreport', component: ClaimsComponent, data: { breadcrumb: 'Dashboard' }}, 
  { path: 'claims', component: RadarComponent, data: { breadcrumb: 'Dashboard' }}, 
]; 

@NgModule({
  declarations: [RadarComponent,JobComponent, ClaimsComponent],
  imports: [ChartModule,
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    OwlDateTimeModule,OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FormsModule,
    MatSortModule,
    DxGanttModule
  ],
  providers: [AlertService],
})
export class AnalyticsModule { }
