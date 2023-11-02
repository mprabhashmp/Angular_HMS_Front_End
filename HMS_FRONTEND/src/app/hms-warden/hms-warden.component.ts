import { Component } from '@angular/core';
import { WardenServiceService } from './warden-service.service';

@Component({
  selector: 'app-hms-warden',
  templateUrl: './hms-warden.component.html',
  styleUrls: ['./hms-warden.component.css']
})
export class HmsWardenComponent {


  currentUser: any; // Adjust the type based on your user object structure

  constructor(private wardenService: WardenServiceService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.wardenService.getCurrentUser().subscribe(
      (user: any) => {
        this.currentUser = user;
      },
      (error: any) => {
        console.log('Error retrieving current user:', error);
      }
    );
  }
}
