import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable()
export class HttpClientHelperService {

  constructor(private http: HttpClient) {

  }

  // HTTP-GET
  getRequest<T>(url: string, queryParams?: any, withAuthToken: boolean = true, defaultValue: T = null): Observable<any> {

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      params: null
    };

    if (withAuthToken == false) {
      options.headers = options.headers.append('No-Authorization', '');
    }

    if (queryParams != null) {
      let httpParams = new HttpParams();
      Object.keys(queryParams).forEach(function (key) {
        httpParams = httpParams.append(key, queryParams[key]);
      });
      options.params = queryParams;
    }

    return this.http.get<T>(url, options);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(result);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string, data: any = null) {
    // console.log(`Message Log:: ${message} ::`, data);
  }
}
