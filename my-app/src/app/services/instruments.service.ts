import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IntrumentsService {

  constructor(private http: HttpClient) {}

  getUserInstruments(): Observable<any> {
    const body = new HttpParams()
    .set('userId', '16543545-5')
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return this.http
      .post(
         'http://localhost:3000/getUserInstruments',
        body.toString(),
        httpOptions
       )
      .pipe(map((data: any) => data));
  }

  getIntruments(): Observable<any> {
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .get(
         'http://localhost:3000/getInstrumentsToInvest',
          httpOptions
       )
      .pipe(map((data: any) => data));
  }
}
