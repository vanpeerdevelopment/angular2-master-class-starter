import { Injectable } from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";

@Injectable()
export class ContactsService {

  getContacts() : Array<Contact> {
      return CONTACT_DATA;
  }
}
