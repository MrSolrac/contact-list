import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ContactInfo } from './contact-info';
import { HttpErrorResponse } from '@angular/common/http/src/response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ContactInfoService {

  private contactInfoUrl:string = 'api/contacts';  // URL to web api

  constructor(private http:HttpClient) { }

  getContacts(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(this.contactInfoUrl)
      .do(contacts => {
        console.log('Contact Infos: ' + JSON.stringify(contacts));
      })        
      .catch(this.handleError);
  };

  getContact(id:number):Observable<ContactInfo> {
    const url = `${this.contactInfoUrl}/${id}`;
    return this.http.get<ContactInfo>(url)
      .do(data => {
        console.log('Contact Info: ' + JSON.stringify(data));
      })
      .catch(this.handleError);
  }

  searchLastName(term:string):Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.contactInfoUrl}/?lastName=${term}`)
      .do(contacts => {         
        console.log(`found ${contacts.length} with last name ${term}`);
      })
      .catch(this.handleError);
  };

  searchFirstName(term:string):Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.contactInfoUrl}/?firstName=${term}`)
      .do(contacts => {         
        console.log(`found ${contacts.length} with first name ${term}`);
      })
      .catch(this.handleError);
  };

  searchAge(term:number):Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.contactInfoUrl}/?age=${term}`)
      .do(contacts => {         
        console.log(`found ${contacts.length} with age ${term}`);
      })
      .catch(this.handleError);
  };

  addContact(contact:ContactInfo): Observable<ContactInfo> {
    return this.http.post<ContactInfo>(this.contactInfoUrl, contact, httpOptions)
      .do(data => {
        console.log('added new contact:' + JSON.stringify(data));
      })
      .catch(this.handleError);
  }

  deleteContact(contact:ContactInfo | number): Observable<ContactInfo> {
    const id = (typeof contact === 'number') ? contact : contact.id;
    const url = `${this.contactInfoUrl}/${id}`;
    return this.http.delete<ContactInfo>(url, httpOptions)
      .do( _=> {        
        console.log(`deleted contact w/id=${id}`)        
      })
      .catch(this.handleError);
  }

  updateContact(contact:ContactInfo): Observable<any> {
    return this.http.put(this.contactInfoUrl, contact, httpOptions)
    .do(data=>{
      console.log(`updated contact w/id=${contact.id}`) 
    })
    .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse) {
      // in a real world app, we may send the server to some remote logging infrastructure
      // instead of just logging it to the console
      let errorMessage = '';
      if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return Observable.throw(errorMessage);
  } ;

}
