import { Component } from '@angular/core';
import { AdminServiceService } from '../hms-admin/admin-service.service';
import { UsersStaffServiceService } from './users-staff-service.service';

@Component({
  selector: 'app-admin-users-staff',
  templateUrl: './admin-users-staff.component.html',
  styleUrls: ['./admin-users-staff.component.css']
})
export class AdminUsersStaffComponent {

  p: number = 1;
 users: any[] = [];
 searchValue: string = '';
 filteredUsers: any[] = [];
 userCount:any;

 constructor(private AdminService: UsersStaffServiceService) { }

  ngOnInit() {

    this.getUsers();
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
 

  getUsers(): void {
    this.AdminService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

}
