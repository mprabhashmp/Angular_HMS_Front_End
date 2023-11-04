import { Component } from '@angular/core';
import { HmsHomeService } from '../hms-home/hms-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warden-navbar',
  templateUrl: './warden-navbar.component.html',
  styleUrls: ['./warden-navbar.component.css']
})
export class WardenNavbarComponent {
  username: string | undefined;
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
