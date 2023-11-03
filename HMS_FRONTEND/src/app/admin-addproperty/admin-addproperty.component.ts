import { Component, OnInit } from '@angular/core';
import { AddpropertyServiceService } from './addproperty-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-addproperty',
  templateUrl: './admin-addproperty.component.html',
  styleUrls: ['./admin-addproperty.component.css']
})
export class AdminAddpropertyComponent{

  property: any = {
    c_item_code: '',
    name: '',
    status: ''
  };

  constructor(
    private propertyService: AddpropertyServiceService
  ) {}

  submitForm(): void {
      this.propertyService.createProperty(this.property)
        .subscribe(response => {
          // Handle the response from the server
          console.log(response);
          alert('Create successful');
          this.clear();
        },
        error => {
          // Handle the error response from the server
          console.log(error);
          alert('Error');
          
        }

        );
    }

  clear(): void {
    this.property = {
      c_item_code: '',
      name: '',
      status: ''
    };
  }
}
