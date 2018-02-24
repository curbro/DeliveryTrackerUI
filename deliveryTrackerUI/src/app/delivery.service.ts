import {Delivery} from './delivery';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs/Observable';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DeliveryService {

  private deliveryUrl = 'http://localhost:8080/find/delivery/all';

  constructor(private http: HttpClient, private messageService: MessageService) {}

  /** GET deliveries from the server */
  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.deliveryUrl)
      .pipe(
      tap(deliveries => this.log(`fetched deliveries`)),
      catchError(this.handleError('getDeliveries', []))
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DeliveryService: ' + message);
  }
}
