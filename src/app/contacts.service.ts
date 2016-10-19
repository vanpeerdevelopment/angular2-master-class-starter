import {Injectable} from '@angular/core';
import {Contact} from "./models/contact";
import {CONTACT_DATA} from "./data/contact-data";

@Injectable()
export class ContactsService {

  getContacts():Array<Contact> {
    return CONTACT_DATA;
  }

  find(id:number | string):Contact {
    return this.getContacts()
      .find(contact => contact.id == id);
  }
}
