import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: 'contacts-detail-view.component.html'
})
export class ContactsDetailViewComponent implements OnInit {

  contact:Contact;

  constructor(private route:ActivatedRoute, private router:Router, private contactsService:ContactsService) {
  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService
      .find(id)
      .subscribe(contact => this.contact = contact);
  }

  navigateToEditor(contact:Contact) {
    this.router.navigate(['/detail', contact.id, 'edit'])
  }

  navigateToList() {
    this.router.navigate(['/']);
  }
}
