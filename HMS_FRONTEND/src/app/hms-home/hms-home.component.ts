import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HmsHomeService } from './hms-home.service';

@Component({
  selector: 'app-hms-home',
  templateUrl: './hms-home.component.html',
  styleUrls: ['./hms-home.component.css']
})
export class HmsHomeComponent {
  index = '';
  password='';
  error='';

  constructor(private HomeService:HmsHomeService, private router:Router) { }

  onSubmit() {
    this.HomeService.login(this.index, this.password)
      .subscribe(
        (response: { token: any; }) => {
          const token = response.token;
        localStorage.setItem('token', token);
          
          // Getting the user role
          this.HomeService.getUserRole().subscribe(
            (role: any) => {

             // Navigate to specific dashboard based on the role
              switch (role) {
                case 'ADMIN':
                  this.router.navigate(['/hms-admin']);
                  break;
                // case 'Student':
                //   this.router.navigate(['/']);
                //   break;
                // case 'Warden':
                //   this.router.navigate(['/']);
                //   break;
                default:
                  this.router.navigate(['/hms-home']);
                  break;
              }
            }
          );
        },
        (error: { status: number; }) => {
          if (error.status === 401) {
            this.error = 'Please enter valid credentials.';
          } else {
            this.error = 'Invalid email or password.';
          }
        }
      );
  }


  onLogout() {
    this.HomeService.logout();
    this.router.navigate(['/hms-home']);
  }


}

