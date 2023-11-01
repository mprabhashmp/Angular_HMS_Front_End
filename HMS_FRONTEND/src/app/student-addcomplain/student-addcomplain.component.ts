import { Component } from '@angular/core';
import { AddcomplainServiceService } from './addcomplain.service.service';

@Component({
  selector: 'app-student-addcomplain',
  templateUrl: './student-addcomplain.component.html',
  styleUrls: ['./student-addcomplain.component.css']
})
export class StudentAddcomplainComponent {


  comp = {
    c_id:'',
    fname: '',
    lname: '',
    room:'',
    user_index:'',
    hostaltype:'',
    c_description: '',
    c_image : '',
    c_itemcode:''
    };
  
    constructor(private addcomplainservice: AddcomplainServiceService) { }
  
    submit(): void {

        // Call the registration service to register the user
        this.addcomplainservice.registerUser(this.comp)
          .subscribe(response => {
            // Handle the response from the server
            console.log(response);
            alert('Successfully Created!!');

          },
          error => {
            // Handle the error response from the server
            console.log(error);
            alert('Complain error!');
            
          }
  
          );
      }


    }
