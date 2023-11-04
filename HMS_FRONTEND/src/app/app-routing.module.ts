import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGurdService } from './auth-gurd.service';
import { HmsHomeComponent } from './hms-home/hms-home.component';
import { RouterresolverService } from './routerresolver.service';
import { HmsAdminComponent } from './hms-admin/hms-admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffRegisterationComponent } from './staff-registeration/staff-registeration.component';
import { HmsStudentsComponent } from './hms-students/hms-students.component';
import { HmsWardenComponent } from './hms-warden/hms-warden.component';
import { HmsSubwardenComponent } from './hms-subwarden/hms-subwarden.component';
import { HmsDeanComponent } from './hms-dean/hms-dean.component';
import { StudentAddcomplainComponent } from './student-addcomplain/student-addcomplain.component';

import { StudentViewcomplainComponent } from './student-viewcomplain/student-viewcomplain.component';

import { AdminPropertyComponent } from './admin-property/admin-property.component';

import { AdminUsersStudentComponent } from './admin-users-student/admin-users-student.component';
import { AdminUsersStaffComponent } from './admin-users-staff/admin-users-staff.component';

import { AdminAddpropertyComponent } from './admin-addproperty/admin-addproperty.component';
import { ResolvedComplainsComponent } from './resolved-complains/resolved-complains.component';
import { StudentResolvedComplainsComponent } from './student-resolved-complains/student-resolved-complains.component';
import { SubwardenResolvedComplainsComponent } from './subwarden-resolved-complains/subwarden-resolved-complains.component';
import { WardenResolveComplaintsComponent } from './warden-resolve-complaints/warden-resolve-complaints.component';
import { DeanResolvedComplainsComponent } from './dean-resolved-complains/dean-resolved-complains.component';




const routes: Routes = [
  {path:"",component:HmsHomeComponent},
  {path:"hms-admin",component:HmsAdminComponent, canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"unauthorized",component:UnauthorizedComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT','WARDEN','SUBWARDEN','DEAN'] },resolve: { userRole: RouterresolverService }},
  {path:"registration",component:RegistrationComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"staff-registeration",component:StaffRegisterationComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverService }},
  {path:"hms-students",component:HmsStudentsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT',] },resolve: { userRole: RouterresolverService }},
  {path:"hms-warden",component:HmsWardenComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','WARDEN',] },resolve: { userRole: RouterresolverService }},
  {path:"hms-subwarden",component:HmsSubwardenComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','SUBWARDEN',] },resolve: { userRole: RouterresolverService }},
  {path:"hms-dean",component:HmsDeanComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','DEAN',] },resolve: { userRole: RouterresolverService }},

  {path:"student-addcomplain",component:StudentAddcomplainComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT',] },resolve: { userRole: RouterresolverService }},

  {path:"student-viewcomplain",component:StudentViewcomplainComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT',] },resolve: { userRole: RouterresolverService }},

  {path:"admin-property",component:AdminPropertyComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','DEAN','WARDEN','SUBWARDEN'] },resolve: { userRole: RouterresolverService }},


  {path:"admin-users-students",component:AdminUsersStudentComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN',] },resolve: { userRole: RouterresolverService }},

  {path:"admin-users-staff",component:AdminUsersStaffComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN',] },resolve: { userRole: RouterresolverService }},

  {path:"admin-addproperty",component:AdminAddpropertyComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN',] },resolve: { userRole: RouterresolverService }},

  {path:"resolved-complains",component:ResolvedComplainsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT','WARDEN','SUBWARDEN','DEAN'] },resolve: { userRole: RouterresolverService }},

  {path:"student-resolved-complains",component:StudentResolvedComplainsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','STUDENT'] },resolve: { userRole: RouterresolverService }},
  {path:"subwarden-resolved-complains",component:SubwardenResolvedComplainsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','SUBWARDEN'] },resolve: { userRole: RouterresolverService }},
  {path:"warden-resolve-complaints",component:WardenResolveComplaintsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','WARDEN'] },resolve: { userRole: RouterresolverService }},
  {path:"dean-resolved-complains",component:DeanResolvedComplainsComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN','DEAN'] },resolve: { userRole: RouterresolverService }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
