import { Component, OnInit } from '@angular/core';
import { AddcomplainServiceService } from './addcomplain.service.service';
import { HmsHomeService } from '../hms-home/hms-home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-addcomplain',
  templateUrl: './student-addcomplain.component.html',
  styleUrls: ['./student-addcomplain.component.css']
})
export class StudentAddcomplainComponent implements OnInit{

  userData: any = {
    id: 0,
    user_index: '',
    fname: '',
    lname: '',
    room: '',
    hostaltype: '',
  };
  
  complain: any = {};
  selectedFile!: File | null;
  
  constructor(
    private complainService: AddcomplainServiceService,
    private homeservice: HmsHomeService
  ) {}
  
  ngOnInit(): void {
    this.loadUserProfile();
  }
  
  loadUserProfile(): void {
    this.homeservice.getUserProfile().subscribe(
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
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  
  submitForm() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('c_itemcode', this.selectedFile);
      formData.append('user_index', this.userData.user_index);
      formData.append('c_description', this.complain.c_description);
      formData.append('fname', this.userData.fname);
      formData.append('lname', this.userData.lname);
      formData.append('room', this.userData.room);
      formData.append('c_image', this.complain.c_image);
      formData.append('hostaltype', this.userData.hostaltype);
      formData.append('status', this.userData.status)+'pending..';
  
      this.complainService.createComplain(formData).subscribe(
        (response) => {
          console.log('Complain submitted:', response);
          alert('Complain Submitted !!');
          this.clear();
        },
        (error) => {
          console.error('Error submitting complain:', error);
          alert('Complain Error !!');
        }
      );
    }

}

clear(): void {
  this.complain = {
    
    c_description: '',
    selectedFile:null,
    c_image:null
  };
}

}