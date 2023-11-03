import { Component } from '@angular/core';
import { UserStudentServiceService } from './user-student-service.service';
import { AdminServiceService } from '../hms-admin/admin-service.service';

@Component({
  selector: 'app-admin-users-student',
  templateUrl: './admin-users-student.component.html',
  styleUrls: ['./admin-users-student.component.css']
})
export class AdminUsersStudentComponent {

  p: number = 1;
 users: any[] = [];
 searchValue: string = '';
 filteredUsers: any[] = [];
 userCount:any;

 constructor(private userService: UserStudentServiceService) { }

  ngOnInit() {

    this.getUsers();
    this.getUserCount();
  }


  getUserCount() {
    this.userService.getUserCount().subscribe(
      (count: any) => {
        this.userCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }
 

  getUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
    });
  }

}
