import { Component } from '@angular/core';
import { StaffRegisterServiceService } from './staff-register.service.service';

@Component({
  selector: 'app-staff-registeration',
  templateUrl: './staff-registeration.component.html',
  styleUrls: ['./staff-registeration.component.css']
})
export class StaffRegisterationComponent {

  regData = {

    fname: '',
    lname: '',
    user_index:'',
    password: '',
    role : '',
    };
  
    constructor(private staffregistrationService: StaffRegisterServiceService) { }
  
    register(): void {

      if (this.validateForm()) {
        // Call the registration service to register the user
        this.staffregistrationService.registerUser(this.regData)
          .subscribe(response => {
            // Handle the response from the server
            console.log(response);
            alert('Registration successful');
            this.clear();
          },
          error => {
            // Handle the error response from the server
            console.log(error);
            alert('Already Registered! Please Check Your Email!');
            
          }
  
          );
      }
    }
    clear(): void {
      this.regData = {
        fname: '',
        lname: '',
        role:'',
        password: '',
        user_index:''
      };
    }
    validateForm(): boolean {
      // Perform front-end validation
      if (
        this.regData.fname.trim() === '' ||
        this.regData.lname.trim() === '' ||
        this.regData.password.trim() === '' ||
        this.regData.role.trim() === ''
      ) {
        // Show an error message or perform any other desired actions
        alert('All fields are required');
        return false;
      }
      
  
      if (!this.validatePassword(this.regData.password)) {
        alert('Invalid password. It should contain at least one lowercase letter, one uppercase letter, one special character, one number, and be at least 8 characters long.  Example - @Example8');
        return false;
      }
  
      return true; // Form is valid
    }

    validatePassword(password: string): boolean {
      // Password validation logic
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
}
