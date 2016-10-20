import {Component} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: 'contacts-creator.component.html'
})
export class ContactsCreatorComponent {

  constructor(private contactsService:ContactsService,
              private router:Router) {
  }

  save(contact:Contact) {
    this.contactsService
      .addContact(contact)
      .subscribe(() => this.router.navigate(["/"]));
  }
}
