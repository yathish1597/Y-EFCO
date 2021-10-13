import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectFinancialComponent } from './project-financial/project-financial.component';
import { ProjectProgressComponent } from './project-progress/project-progress.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ChartModule } from 'angular-highcharts';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SharedModule } from 'src/app/shared/shared.module';

export const routes = [
  // { path: '', redirectTo: 'progress', pathMatch: 'full' },
  // { path: 'financial', component: ProjectFinancialComponent, data: { breadcrumb: '' } },
  // { path: 'progress', component: ProjectProgressComponent, data: { breadcrumb: '' } },
]
@NgModule({
  declarations: [ProjectFinancialComponent, ProjectProgressComponent],
  imports: [
    ChartModule,
    CommonModule, NgxChartsModule, RouterModule.forChild(routes),
    SharedModule, ConfirmationPopoverModule, ReactiveFormsModule, FormsModule,
    OwlDateTimeModule, OwlNativeDateTimeModule
  ]
})
export class ProjectSummaryModule { }
