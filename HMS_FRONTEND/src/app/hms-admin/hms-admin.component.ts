import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from './admin-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hms-admin',
  templateUrl: './hms-admin.component.html',
  styleUrls: ['./hms-admin.component.css']
})
export class HmsAdminComponent implements OnInit {

 constructor(private AdminService: AdminServiceService) { }

 p: number = 1;
 users: any[] = [];
 searchValue: string = '';
 filteredUsers: any[] = [];
 userCount:any;
  ngOnInit() {
      this.getUserCount();
  }
 
  getUserCount() {
    this.AdminService.getUserCount().subscribe(
      (count: any) => {
        this.userCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }
 
}
