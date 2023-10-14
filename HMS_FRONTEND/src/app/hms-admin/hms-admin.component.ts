import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminServiceService } from './admin-service.service';

@Component({
  selector: 'app-hms-admin',
  templateUrl: './hms-admin.component.html',
  styleUrls: ['./hms-admin.component.css']
})
export class HmsAdminComponent implements OnInit {
 
  users: any[] = [];
 searchValue: string = '';
 filteredUsers: any[] = [];

 constructor(private AdminService: AdminServiceService) { }

  ngOnInit() {

    this.getUsers();
  }

  userUpdate: any = {
    id: 0,
    fname: '',
    lname: '',
    user_index: '',
    role: ''
  };

  getUserCount(){
    this.AdminService.getUserCount().subscribe(count => this.users = count);
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
      this.filteredUsers = this.users.filter(user =>
        user.fname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.lname.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.user_index.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filteredUsers = this.users;
  }

}
