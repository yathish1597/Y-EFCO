import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlertService } from "src/app/shared/services/alert.service";
import { SharedModule } from "src/app/shared/shared.module";
import { ActionScreenComponent } from './action-screen/action-screen.component';

export const routes = [
    { path: '', redirectTo: 'scheduling-screen', pathMatch: 'full' },
    { path: 'scheduling-screen', component: ActionScreenComponent, loadChildren: './action-screen/action-screen.module#ActionScreenModule', data: { breadcrumb: 'Job Orders' } }
  ]

@NgModule({
    declarations: [ ActionScreenComponent],
    imports: [ 
    RouterModule.forChild(routes),
    SharedModule
    ],
    providers: [AlertService],
    entryComponents: []

})
export class ActionScheduleModule { }