import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  terms$ = new Subject<string>();
  contacts:Observable<Array<Contact>>;

  constructor(private contactService:ContactsService) {
  }

  ngOnInit():void {
    this.contacts = this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.contactService.search(term))
      .merge(this.contactService.getContacts().takeUntil(this.terms$));
  }
}
