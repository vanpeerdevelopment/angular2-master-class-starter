import {Injectable, Inject} from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ContactsService {

  constructor(private http:Http, @Inject('apiEndpoint') private apiEndpoint) {
  }

  find(id:number | string):Observable<Contact> {
    return this.http
      .get(`${this.apiEndpoint}/contacts/${id}`)
      .map(response => response.json())
      .map(data => data.item);
  }

  getContacts():Observable<Array<Contact>> {
      return this.http
        .get(`${this.apiEndpoint}/contacts`)
      .map(response => response.json())
      .map(data => data.items);
  }

  updateContact(contact:Contact):Observable<Contact> {
    return this.http
      .put(`${this.apiEndpoint}/contacts/${contact.id}`, contact)
      .map(response => response.json())
      .map(data => data.item);
  }
}
