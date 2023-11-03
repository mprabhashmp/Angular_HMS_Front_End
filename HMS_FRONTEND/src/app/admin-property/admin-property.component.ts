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
  p: number = 1;

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
    this.PropertyService.getProperties().subscribe(properties => {
      this.properties = properties;
      this.filterdProperties = properties;
    });
  }

  searchProperty(): void {
    console.log(this.searchValue);
    if (this.searchValue.trim() === '') {
      this.filterdProperties = this.properties;
    } else {
      this.filterdProperties = this.properties.filter(property =>
        property.proid.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.c_item_code.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.status.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filterdProperties = this.properties;
  }
  
}
