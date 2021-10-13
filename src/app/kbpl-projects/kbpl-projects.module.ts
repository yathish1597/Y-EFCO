import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { GridColumnsProjectsDialogComponent } from './grid-columns-projects-dialog/grid-columns-projects-dialog.component';
import { KbplProjectsComponent } from './kbpl-projects.component';
import { ContractsDialogComponent } from './contracts-dialog/contracts-dialog.component';
import { ProjectsGridviewComponent } from './projects-gridview/projects-gridview.component';
import { ProjectsKanbanviewComponent } from './projects-kanbanview/projects-kanbanview.component';
import { ShowIssueComponent } from './projects-gridview/show-issue/show-issue.component';
import { ActionScheduleComponent } from './action-schedule/action-schedule.component';
import { NewprojectDashboardComponent } from './newproject-dashboard/newproject-dashboard.component';
import { ScheduleTabsComponent } from './action-schedule/schedule-tabs/schedule-tabs.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddNotesContractorsComponent } from './projects-gridview/add-notes-contractors/add-notes-contractors.component';
import { PreviewexcelComponent } from './projects-gridview/previewexcel/previewexcel.component';

export const routes = [
  { path: '', redirectTo: 'gridview', pathMatch: 'full' },
  { path: 'gridview', component: ProjectsGridviewComponent, data: { breadcrumb: 'Job Orders' } },
  { path: 'kanbanview', component: ProjectsKanbanviewComponent, data: { breadcrumb: 'Job Orders' } },
  { path: 'scheduling', component: ActionScheduleComponent, loadChildren: './action-schedule/action-schedule.module#ActionScheduleModule', data: { breadcrumb: 'Projects' } },
  { path: 'joborder-dashboard', component: NewprojectDashboardComponent, loadChildren: './newproject-dashboard/newproject-dashboard.module#NewprojectDashboardModule', data: { breadcrumb: '' }  }, 
];

@NgModule({
  declarations: [KbplProjectsComponent, AddProjectDialogComponent, GridColumnsProjectsDialogComponent, ContractsDialogComponent, ProjectsGridviewComponent, ProjectsKanbanviewComponent, ShowIssueComponent, ActionScheduleComponent, 
    ScheduleTabsComponent, NewprojectDashboardComponent, AddNotesContractorsComponent, PreviewexcelComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],

  providers: [AlertService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  entryComponents: [AddProjectDialogComponent, GridColumnsProjectsDialogComponent, ContractsDialogComponent, ShowIssueComponent]
})
export class KBPLProjectsModule { }
