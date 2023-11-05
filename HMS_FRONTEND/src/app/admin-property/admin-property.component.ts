import { Component, OnInit } from '@angular/core';
import { PropertyServiceService } from './property-service.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-admin-property',
  templateUrl: './admin-property.component.html',
  styleUrls: ['./admin-property.component.css']
})
export class AdminPropertyComponent implements OnInit {

  property: any[] = [];
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
    c_itemcode: '',
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
    this.PropertyService.getProperties().subscribe(property => {
      this.property = property;
      this.filterdProperties = property;
    });
  }

  searchProperty(): void {
    console.log(this.searchValue);
    if (this.searchValue.trim() === '') {
      this.filterdProperties = this.property;
    } else {
      this.filterdProperties = this.property.filter(property =>
        property.proid.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.c_itemcode.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
        property.status.toLowerCase().includes(this.searchValue.toLowerCase())
      );
    }
  }

  clearSearch(): void {
    this.searchValue = '';
    this.filterdProperties = this.property;
  }
  
}
