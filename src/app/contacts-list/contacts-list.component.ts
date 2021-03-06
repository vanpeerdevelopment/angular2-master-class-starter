import {Component, OnInit} from "@angular/core";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Rx";
import {EventBusService} from "../eventbus.service";

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html'
})
export class ContactsListComponent implements OnInit {

  terms$ = new Subject<string>();
  contacts:Observable<Array<Contact>>;

  constructor(private contactService:ContactsService,
              private eventBus:EventBusService) {
  }

  ngOnInit():void {
    this.eventBus.emit('appTitleChange', 'Contacts');
    this.contacts = this.contactService
      .search(this.terms$)
      .merge(this.contactService.getContacts().takeUntil(this.terms$));
  }
}
