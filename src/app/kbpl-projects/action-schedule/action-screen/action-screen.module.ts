import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActionBoardViewComponent } from './action-board-view/action-board-view.component';
import { ActionGridViewComponent } from './action-grid-view/action-grid-view.component';
import { ActionSummaryViewComponent } from './action-summary-view/action-summary-view.component';

export const routes = [
  { path: '', redirectTo: 'scheduling-board-view', pathMatch: 'full' },
  { path: 'scheduling-grid-view', component: ActionGridViewComponent, loadChildren: './action-grid-view/action-grid-view.module#ActionGridViewModule', data: { breadcrumb: 'Job Orders' } },
  { path: 'scheduling-board-view', component: ActionBoardViewComponent, data: { breadcrumb: 'Job Orders' } },
  { path: 'scheduling-summary-view', redirectTo: 'scheduling-summary-view/1/2', pathMatch: 'full' },
  { path: 'scheduling-summary-view/:view/:week', component: ActionSummaryViewComponent, data: { breadcrumb: 'Job Orders' } },
]

@NgModule({
  declarations: [ActionBoardViewComponent, ActionGridViewComponent, ActionSummaryViewComponent],
  imports: [
    DragDropModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ActionScreenModule { }
