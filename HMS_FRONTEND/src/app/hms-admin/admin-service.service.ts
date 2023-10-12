import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private apiUrl = 'http://localhost:8080/api/admin/all';
  private adminUrl = 'http://localhost:8080/api/admin';
  private getusercount= "http://localhost:8080/api/admin/userCount";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.adminUrl}/${id}`;
    return this.http.delete<any>(url);
  }

  getUser(id: number): Observable<any> {
    const url = `${this.adminUrl}/${id}`;
    return this.http.get<any>(url);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.adminUrl}/${id}`);
  }

  getUserCount():Observable<any>{
    return this.http.get<any>(`${this.getusercount}`);
  }
  // updateUser(id: number, updatedUser: any): Observable<any> {
  //   return this.http.put<any>(`${this.adminUrl}/update/${id}`, updatedUser);
  // }



}
