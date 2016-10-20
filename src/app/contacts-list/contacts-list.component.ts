import {Component, OnInit} from '@angular/core';
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Observable, Subject} from "rxjs/Rx";

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
    this.terms$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => this.search(term));
    this.contacts = this.contactService.getContacts();
  }

  search(term:string) {
    this.contacts = this.contactService.search(term);
  }
}
