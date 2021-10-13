import { NgModule } from "@angular/core";
import { SettingsComponent } from "./settings/settings.component";
import { RouterModule } from "@angular/router";
import { DragulaModule, DragulaService } from "ng2-dragula";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { MasterdataNewComponent } from "./masterdata-new/masterdata-new.component";
import { SharedModule } from "../shared/shared.module";
import { LookupComponent } from "./lookup/lookup.component";
import { AddLookupDialogComponent } from "./lookup/add-lookup-dialog/add-lookup-dialog.component";
import { EventLogComponent } from './event-log/event-log.component';
import { ErrorLogComponent } from './error-log/error-log.component';
import { ManagePersonnelComponent } from './manage-personnel/manage-personnel.component';

export const routes = [
  { path: "", redirectTo: "manage-users", pathMatch: "full" },
  {
    path: "manage-users",
    component: ManageUserComponent,
    loadChildren: "./manage-user/manage-user.module#ManageUserModule",
    data: { breadcrumb: "Manage User" },
  },
  {
    path: "master-data",
    component: MasterdataNewComponent,
    loadChildren: "./masterdata-new/masterdata-new.module#MasterdataNewModule",
    data: { breadcrumb: "Master Data" },
  },
  {
    path: "settings",
    component: SettingsComponent,
    pathMatch: "full",
    data: { breadcrumb: "Settings" },
  },
  {
    path: "lookup-options",
    component: LookupComponent,
    pathMatch: "full",
    data: { breadcrumb: "Lookup Options" },
  },
  {
    path: "event-log",
    component: EventLogComponent,
    pathMatch: "full",
    data: { breadcrumb: "Event-Log" },
  },
  {
    path: "error-log",
    component: ErrorLogComponent,
    pathMatch: "full",
    data: { breadcrumb: "Error-Log" },
  },
  {
    path: "manage-personnel",
    component: ManagePersonnelComponent,
    loadChildren: "./manage-personnel/manage-personnel.module#ManagePersonnelModule",
    data: { breadcrumb: "Manage Personnel"}
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), DragulaModule],
  providers: [DragulaService],
  declarations: [
    ManageUserComponent,
    MasterdataNewComponent,
    SettingsComponent,
    LookupComponent,
    AddLookupDialogComponent,
    EventLogComponent,
    ErrorLogComponent,
    ManagePersonnelComponent,
  ],
  entryComponents: [AddLookupDialogComponent],
})
export class AdminModule {}
