import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurdService } from './auth-gurd.service';
import { HmsHomeComponent } from './hms-home/hms-home.component';
import { RouterresolverService } from './routerresolver.service';
import { HmsAdminComponent } from './hms-admin/hms-admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffRegisterationComponent } from './staff-registeration/staff-registeration.component';

const routes: Routes = [
  {path:"",component:HmsHomeComponent},
  {path:"hms-admin",component:HmsAdminComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"unauthorized",component:UnauthorizedComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"registration",component:RegistrationComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"staff-registeration",component:StaffRegisterationComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
