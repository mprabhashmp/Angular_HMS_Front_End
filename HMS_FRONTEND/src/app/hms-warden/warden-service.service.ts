import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WardenServiceService {

  private apiUrl= 'http://localhost:8080/api/warden/getAllComplainsfromWarden';
  private apiUrl1= 'http://localhost:8080/api/warden';


  constructor(private http: HttpClient) { }

  complains:any;

getWardenComplains(): Observable<any[]> {
  return this.http.get<any[]>(this.apiUrl);
}

resolveComplain(c_id: number): Observable<any> {
  return this.http.put<any>(`${this.apiUrl1}/getresolvebywarden/${c_id}`, {});
}

downloadPDF(): Observable<HttpResponse<Blob>> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
  return this.http.get('http://your-server-url/dailyReport', {
    headers,
    observe: 'response',
    responseType: 'blob'
  });
}

}
