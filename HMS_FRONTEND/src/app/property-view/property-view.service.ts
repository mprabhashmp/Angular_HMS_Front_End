import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyViewService {

  private apiUrl = 'http://localhost:8080/api/property/allproperty';
  private propertyUrl = 'http://localhost:8080/api/property';
  private countProperty = 'http://localhost:8080/api/property';
  property:any;

  constructor(private http: HttpClient) { }

  getProperties(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }

  getPropertyCount(): Observable<number> {
    return this.http.get<number>(`${this.countProperty}/propertyCount`);
  }
}
