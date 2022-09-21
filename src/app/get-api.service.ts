import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

export interface DataApi {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class GetApiService implements Resolve<any> {
  private url = 'https://catfact.ninja/fact';
   
  constructor(private httpClient: HttpClient) {
    console.log("Constructor ne");
    
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpClient.get(this.url);
  }
} 
