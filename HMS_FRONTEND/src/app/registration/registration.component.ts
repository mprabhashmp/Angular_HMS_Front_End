import { Component } from '@angular/core';
import { RegistrationServiceService } from './registration.service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  regData = {

    fname: '',
    lname: '',
    room:'',
    user_index:'',
    password: '',
    role : '',
    hostaltype:''
    };
  
    constructor(private registrationService: RegistrationServiceService) { }
  
    register(): void {

      if (this.validateForm()) {
        // Call the registration service to register the user
        this.registrationService.registerUser(this.regData)
          .subscribe(response => {
            // Handle the response from the server
            console.log(response);
            alert('Registration successful');
            this.clear();
          },
          error => {
            // Handle the error response from the server
            console.log(error);
            alert('Already Registered! Please Check Your Index');
            
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
        room: '',
        hostaltype:'',
        user_index:''
      };
    }
    
    validateForm(): boolean {
      // Perform front-end validation
      if (
        this.regData.fname.trim() === '' ||
        this.regData.lname.trim() === '' ||
        this.regData.room.trim() === '' ||
        this.regData.password.trim() === '' ||
        this.regData.role.trim() === ''||
        this.regData.hostaltype.trim() === ''||
        this.regData.user_index.trim() === ''
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
