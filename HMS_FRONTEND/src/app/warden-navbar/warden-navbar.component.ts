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
