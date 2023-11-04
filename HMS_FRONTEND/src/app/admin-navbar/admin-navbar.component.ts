import { Component, OnInit } from '@angular/core';
import { AuthGurdService } from '../auth-gurd.service';
import { Router } from '@angular/router';
import { HmsHomeService } from '../hms-home/hms-home.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  
  userData: any;


  constructor(private HmsHomeService : HmsHomeService, private router: Router) { }

  
  ngOnInit(): void {
    this.loadUserProfile();
}

loadUserProfile(): void {
  this.HmsHomeService.getUserProfile().subscribe(
    (response: any) => {
      this.userData = { ...response };
    },
    (error: any) => {
      console.log('Error retrieving user profile:', error);
      console.log('Error status:', error.status);
      console.log('Error message:', error.message);
      // Handle the error appropriately
    }
  );
}
    
  

  onLogout() {
    this.HmsHomeService.logout();
    this.router.navigate(['/']);
  }
}
