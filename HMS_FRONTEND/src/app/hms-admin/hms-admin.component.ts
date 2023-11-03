import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from './admin-service.service';

@Component({
  selector: 'app-hms-admin',
  templateUrl: './hms-admin.component.html',
  styleUrls: ['./hms-admin.component.css']
})
export class HmsAdminComponent implements OnInit {
  p: number = 1;
 users: any[] = [];
 searchValue: string = '';
 filteredUsers: any[] = [];
 userCount:any;

 constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {

    this.getUsers();
    this.getUserCount();
  }

  userUpdate: any = {
    id: 0,
    fname: '',
    lname: '',
    user_index: '',
    hostaltype:'',
    room:'',
    role: ''
  };

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

  searchUsers(): void {
    if (this.searchValue.trim() === '') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(users =>
        users.fname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        users.lname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        users.user_index.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        users.room.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        users.hostaltype.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        users.role.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredUsers = this.users;
  }

}
