import { Component } from '@angular/core';
import { PropertyViewService } from './property-view.service';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent {

  property: any[] = [];
  searchValue: string = '';
  filterdProperties: any[] = [];
  propertyCount:any;
  p: number = 1;

  constructor(private PropertyViewService: PropertyViewService) { }

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
    this.PropertyViewService.getPropertyCount().subscribe(
      (count: any) => {
        this.propertyCount = count;
      },
      (error) => {
        console.log('Error retrieving user count:', error);
      }
    );
  }

  getProperties() {
    this.PropertyViewService.getProperties().subscribe(property => {
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
