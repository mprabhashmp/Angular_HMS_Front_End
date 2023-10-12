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

  username: string | undefined;


  constructor(private HmsHomeService : HmsHomeService, private router: Router) { }

  
    ngOnInit(): void {
      this.HmsHomeService.getUsername().subscribe(
        (response: any) => {
          this.username = response.firstname.toString(); //Converting the Object that returning through the Endpoint as the response
        },
        (error: any) => {
          // Handle error
        }
      );
    }
    
  

  onLogout() {
    this.HmsHomeService.logout();
    this.router.navigate(['/']);
  }
}
