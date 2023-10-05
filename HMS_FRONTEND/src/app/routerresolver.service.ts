import { Injectable } from '@angular/core';
import { AuthGurdService } from './auth-gurd.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HmsHomeService } from './hms-home/hms-home.service';

@Injectable({
  providedIn: 'root'
})
export class RouterresolverService {
  constructor(private authservice: HmsHomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    //  fetch the user's role from the backend
    return this.authservice.getUserRole();

}
}
