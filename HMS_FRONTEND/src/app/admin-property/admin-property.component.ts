import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from './property-service.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-admin-property',
  templateUrl: './admin-property.component.html',
  styleUrls: ['./admin-property.component.css']
})
export class AdminPropertyComponent implements OnInit {

  properties: any[] = [];
  searchValue: string = '';
  filterdProperties: any[] = [];
  propertyCount:any;

  constructor(private PropertyService: PropertyServiceService) { }

  ngOnInit() {
      this.getProperties();
      this.getPropertyCount();
  }

  propertyUpdate: any = {
    proid: 0,
    name: '',
    c_item_code: '',
    status: ''
  };

  getPropertyCount() {
    this.PropertyService.getPropertyCount().subscribe(
      (count: any) => {
        this.propertyCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }

  getProperties() {
  
  }
}
