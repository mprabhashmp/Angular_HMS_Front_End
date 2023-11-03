import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddpropertyServiceService {

  private apiUrl = 'http://localhost:8080/api/property/create';

  constructor(private http: HttpClient) {}

  createProperty(propertyData: FormData) {
    return this.http.post(this.apiUrl, propertyData);
  }
}
