import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ClaimsComponent } from './claims/claims.component';
import { IsolationPreviewComponent } from './isolation-preview/isolation-preview.component';
import { SafetyPreviewComponent } from './safety-preview/safety-preview.component';

export const routes: Routes = [
    { path: '', loadChildren: './logins/logins.module#LoginsModule', data: { breadcrumb: 'Login' } }, 
    {
        path: '',
        component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard/jobs', pathMatch: 'full' },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Carriers' } },
            { path: 'dashboard', loadChildren: './analytics/analytics.module#AnalyticsModule', component: AnalyticsComponent, data: { breadcrumb: 'Dashboard' } },
            { path: 'clients', loadChildren: './clients/clients.module#ClientsModule', data: { breadcrumb: 'Clients' } },
            { path: 'joborders', loadChildren:'./kbpl-projects/kbpl-projects.module#KBPLProjectsModule', data: { breadcrumb: 'Job Orders' } },
            { path: 'claims', loadChildren: './claims/claims.module#ClaimsModule', component: ClaimsComponent, data: {breadcrumb: 'Manage Claims'}},
            {path: 'isolation_preview', component: IsolationPreviewComponent, data: { breadcrumb: 'Isolation Valve - Preview' } },
            {path: 'safety_preview', component: SafetyPreviewComponent, data: { breadcrumb: 'Safety Valve - Preview' }  }
        ]
    },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: true
});