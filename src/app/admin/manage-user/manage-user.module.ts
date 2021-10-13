import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { RolesComponent } from './roles/roles.component';
import { ProjPermComponent } from './users/proj-perm/proj-perm.component';
import { AddRolesComponent } from './roles/add-roles/add-roles.component';
import { ResetPasswordDialogComponent } from './users/reset-password-dialog/reset-password-dialog.component';
import { RolesService } from 'src/app/shared/services/roles.service';

export const routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, data: { breadcrumb: 'Users' }},
  { path: 'roles', component: RolesComponent, data: { breadcrumb: 'Roles' }},
  { path: 'permissions', component: PermissionsComponent, loadChildren: './permissions/permissions/permissions.module#PermissionsModule', data: { breadcrumb: 'Permissions' }},
];

@NgModule({
  declarations: [
    UsersComponent, 
    PermissionsComponent, 
    EditUserComponent, 
    RolesComponent,
    ProjPermComponent,
    AddRolesComponent,
    ResetPasswordDialogComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[
    EditUserComponent,
    ProjPermComponent,
    AddRolesComponent,
    ResetPasswordDialogComponent
  ],
  providers:[
    RolesService
  ]
})
export class ManageUserModule { }
