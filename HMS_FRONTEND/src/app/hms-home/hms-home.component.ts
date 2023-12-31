import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HmsHomeService } from './hms-home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hms-home',
  templateUrl: './hms-home.component.html',
  styleUrls: ['./hms-home.component.css']
})
export class HmsHomeComponent {
  user_index = '';
  password='';
  error='';

  constructor(private HomeService:HmsHomeService, private router:Router) { }

  onSubmit() {
    this.HomeService.login(this.user_index, this.password)
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
                case 'STUDENT':
                  this.router.navigate(['/hms-students']);
                  break;
                case 'WARDEN':
                  this.router.navigate(['/hms-warden']);
                  break;
                  case 'SUBWARDEN':
                  this.router.navigate(['/hms-subwarden']);
                  break;
                  case 'DEAN':
                  this.router.navigate(['/hms-dean']);
                  break;
                default:
                  this.router.navigate(['/']);
                  break;
              }
            }
          );
        },
        (error) => {
          if (error.status === 401) {
            this.error = 'Please enter valid credentials.';
          } else {
            this.error = 'Invalid Index or password.';
          }
        }
      );
  }


  onLogout() {
    this.HomeService.logout();
    this.router.navigate(['/hms-home']);
  }

}

