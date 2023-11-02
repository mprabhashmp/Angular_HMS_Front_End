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
          // Handle the response from the server
        },
        (error) => {
          console.error('Error submitting complain:', error);
          // Handle errors
        }
      );
    }
  }
}
