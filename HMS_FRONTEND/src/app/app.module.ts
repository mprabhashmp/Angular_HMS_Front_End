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

@NgModule({
  declarations: [
    AppComponent,
    HmsHomeComponent,
    HmsAdminComponent,
    UnauthorizedComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
