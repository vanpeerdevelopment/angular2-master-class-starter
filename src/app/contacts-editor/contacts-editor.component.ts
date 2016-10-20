import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html'
})
export class ContactsEditorComponent implements OnInit {

  contact:Contact = <Contact>{address: {}};

  constructor(private contactsSerivce:ContactsService, private route:ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsSerivce
      .find(id)
      .subscribe(contact => this.contact = contact);
  }

  cancel(contact:Contact) {
    this.router.navigate(['/detail', contact.id]);
  }

  save(contact:Contact) {
    this.contactsSerivce
      .updateContact(contact)
      .subscribe(contact => this.router.navigate(['/detail', contact.id]));
  }
}
