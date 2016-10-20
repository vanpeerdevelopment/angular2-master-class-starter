import {Component, OnInit} from "@angular/core";
import {EventBusService} from "./eventbus.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit {

  title:String = 'Contacts';

  constructor(private eventBus:EventBusService,
              private titleService:Title) {
  }

  ngOnInit():void {
    this.eventBus
      .observe('appTitleChange')
      .subscribe(title => {
        this.title = title;
        this.titleService.setTitle(title);
      });
  }
}
