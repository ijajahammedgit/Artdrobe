import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
private getUserUrl: string= "";

 private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(private http: HttpClient) { }

getUserVerified() : Observable<any>{
return this.http.get(environment.logInUrl);
}

getEqpReqDetails(): Observable<any>{
  return this.http.get(environment.eqpDetailsUrl);
}


//post method
getUserDetails (id, product): Observable<any> {
  return this.http.put(this.getUserUrl + 'products/' + id, JSON.stringify(product), this.httpOptions).pipe(
    
    //catchError(this.handleError<any>('updateProduct'))
  );
}





}
