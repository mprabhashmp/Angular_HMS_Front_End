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
    c_itemcode: '',
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
        
        },
        error => {
          // Handle the error response from the server
          console.log(error);
          alert('Created Successfully');
          this.clear();
        }

        );
    }

  clear(): void {
    this.property = {
      c_itemcode: '',
      name: '',
      status: ''
    };
  }
}
