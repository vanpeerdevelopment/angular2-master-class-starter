import {Injectable} from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ContactsService {

  API_ENDPOINT = 'http://localhost:4201';

  constructor(private http:Http){
  }

  find(id:number | string):Observable<Contact> {
    return this.http
      .get(`${this.API_ENDPOINT}/api/contacts/${id}`)
      .map(response => response.json())
      .map(data => data.item);
  }

  getContacts():Observable<Array<Contact>> {
      return this.http
      .get(`${this.API_ENDPOINT}/api/contacts`)
      .map(response => response.json())
      .map(data => data.items);
  }

  updateContact(contact:Contact):Observable<Contact> {
    return this.http
      .put(`${this.API_ENDPOINT}/api/contacts/${contact.id}`, contact)
      .map(response => response.json())
      .map(data => data.item);
  }
}
