import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardenServiceService {

  private apiUrl = 'http://localhost:8080/api/user/profile'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    const url = `${this.apiUrl}/current`;
    return this.http.get<any>(url);
  }
}
