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
    DeanNavbarComponent
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
