import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HmsHomeService {

  private apiUrl1 = 'http://localhost:8080/api/auth/authenticate';
  private apiUrl2 = 'http://localhost:8080/api/auth/CurrentUser';
  private apiUrl3 = 'http://localhost:8080/api/auth/UserProfile';
  private apiUrl4 = 'http://localhost:8080/api/auth/UpdateProfile';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {    //Class that can be use to get stored JWT 
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return headers;
  }

  login(user_index: string, password: string): Observable<{ token: string }> {
    const body = {
      user_index: user_index,
      password: password
    };
    return this.http.post<{ token: string }>(`${this.apiUrl1}`, body);
  }
  

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  getUsername(): Observable<string> { //Getting the Current Logged User
    const headers = this.getHeaders();
    return this.http.get<string>(`${this.apiUrl2}`,{ headers }); //Using stored token 
  }

  getUserProfile(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl3}`, { headers });
  }


  getUserRole(): Observable<string> {
    const token = localStorage.getItem('token') || ''; // Providing a default value of an empty string if token is null
    const decodedToken: any = jwt_decode(token);
    const role = decodedToken.role[0];
    return of(role);
  }
  
  updateUserProfile(updatedUser: any): Observable<any> {
    const headers = this.getHeaders();
    const id = updatedUser.id; // Assuming your updatedUser object contains the 'id' field
    return this.http.put<any>(`${this.apiUrl4}`, updatedUser, { headers });
  }


}
