import { Component } from '@angular/core';
import { AddcomplainServiceService } from './addcomplain.service.service';

@Component({
  selector: 'app-student-addcomplain',
  templateUrl: './student-addcomplain.component.html',
  styleUrls: ['./student-addcomplain.component.css']
})
export class StudentAddcomplainComponent {

  complain: any = {};
  selectedFile!: File | null;

  constructor(private complainService: AddcomplainServiceService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitForm() {

    if (
      !this.selectedFile ||
      !this.complain.user_index ||
      !this.complain.c_description ||
      !this.complain.fname ||
      !this.complain.lname ||
      !this.complain.room ||
      !this.complain.c_image ||
      !this.complain.hostaltype
    ) {
      alert('All fields are required');
      return;
    }

    if (this.selectedFile) {

      const formData = new FormData();
      formData.append('c_itemcode', this.selectedFile);
      formData.append('user_index', this.complain.user_index);
      formData.append('c_description', this.complain.c_description);
      formData.append('fname', this.complain.fname);
      formData.append('lname', this.complain.lname);
      formData.append('room', this.complain.room);
      formData.append('c_image',this.complain.c_image)
      formData.append('hostaltype', this.complain.hostaltype);

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

  // validateForm(): boolean {
  //   // Perform front-end validation
  //   if (
  //     this.complain.fname.trim() === '' ||
  //     this.complain.lname.trim() === '' ||
  //     this.complain.room.trim() === '' ||
  //     this.complain.c_decription.trim() === ''||
  //     this.complain.user.trim() === ''
  //   ) {
  //     // Show an error message or perform any other desired actions
  //     alert('All fields are required');
  //     return false;
  //   }
  //  return true; 
  // }

  clear(): void {
    this.complain = {
      fname: '',
      lname: '',
      user_index:'',
      room:'',
      c_description:'',
      c_image:null,
      c_itemcode:null
    };
  }
}
