import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubwardenServiceService {

  private apiUrl= 'http://localhost:8080/api/subwarden/getAllNullComplains';
  private complainCount= 'http://localhost:8080/api/subwarden';

  constructor(private http: HttpClient) { }

  complains:any;

getComplains(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}


getcomplainCount(): Observable<number> {
  return this.http.get<number>(`${this.complainCount}/getCount`);
}
}
