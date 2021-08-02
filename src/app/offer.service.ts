import { Injectable } from '@angular/core';
import { Offer } from './offer';
import { OFFERS } from './mock-offers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private offersUrl = 'api/offers'; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET offers from the server */
  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl).pipe(
      tap((_) => console.log('fetched offers')),
      catchError(this.handleError<Offer[]>('getOffers', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
