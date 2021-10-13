import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';


import { GridScheduledComponent } from './grid-scheduled/grid-scheduled.component';
import { GridUnscheduledComponent } from './grid-unscheduled/grid-unscheduled.component';

export const routes = [
  { path: '', redirectTo: 'unscheduled', pathMatch: 'full' },
  { path: 'scheduled', component: GridScheduledComponent, data: { breadcrumb: 'Projects' } },
  { path: 'unscheduled', component: GridUnscheduledComponent, data: { breadcrumb: 'Projects' } },
]

@NgModule({
  declarations: [GridScheduledComponent, GridUnscheduledComponent],
  imports: [
    ChartModule, SharedModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ActionGridViewModule { }
