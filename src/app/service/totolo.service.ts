import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TotoloService {

  constructor(private http: HttpClient) { }
  
  public getProducts$(): Observable<any>{
    return this.http.get('http://localhost:8080/totolo/v1/products')
      
  }

}
