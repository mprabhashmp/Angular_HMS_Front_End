import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HmsHomeComponent } from './hms-home/hms-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HmsAdminComponent } from './hms-admin/hms-admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { StaffRegisterationComponent } from './staff-registeration/staff-registeration.component';
import { HmsStudentsComponent } from './hms-students/hms-students.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { HmsWardenComponent } from './hms-warden/hms-warden.component';
import { WardenNavbarComponent } from './warden-navbar/warden-navbar.component';
import { HmsSubwardenComponent } from './hms-subwarden/hms-subwarden.component';
import { SubwardenNavbarComponent } from './subwarden-navbar/subwarden-navbar.component';
import { HmsDeanComponent } from './hms-dean/hms-dean.component';
import { DeanNavbarComponent } from './dean-navbar/dean-navbar.component';
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
import { StudentViewWardenComponent } from './student-view-warden/student-view-warden.component';
import { StudentViewDeanComponent } from './student-view-dean/student-view-dean.component';



@NgModule({
  declarations: [
    AppComponent,
    HmsHomeComponent,
    HmsAdminComponent,
    UnauthorizedComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminNavbarComponent,
    RegistrationComponent,
    StaffRegisterationComponent,
    HmsStudentsComponent,
    StudentNavbarComponent,
    HmsWardenComponent,
    WardenNavbarComponent,
    HmsSubwardenComponent,
    SubwardenNavbarComponent,
    HmsDeanComponent,
    DeanNavbarComponent,
    StudentAddcomplainComponent,

    StudentViewcomplainComponent,

    AdminPropertyComponent,

      AdminUsersStudentComponent,
      AdminUsersStaffComponent,

      AdminAddpropertyComponent,
        ResolvedComplainsComponent,
        StudentResolvedComplainsComponent,
        SubwardenResolvedComplainsComponent,
        WardenResolveComplaintsComponent,
        DeanResolvedComplainsComponent,
        StudentViewWardenComponent,
        StudentViewDeanComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
