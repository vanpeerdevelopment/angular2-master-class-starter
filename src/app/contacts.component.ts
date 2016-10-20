import {Component, OnInit} from "@angular/core";
import {EventBusService} from "./eventbus.service";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {

  title:String;

  constructor(private eventBus:EventBusService) {
  }

  ngOnInit():void {
    this.eventBus
      .observe('appTitleChange')
      .subscribe(title => this.title = title);
  }
}
