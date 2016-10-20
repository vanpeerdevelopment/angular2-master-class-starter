import {API_ENDPOINT} from "./app.tokens";
import {ContactsService} from "./contacts.service";
import {EventBusService} from "./eventbus.service";
import {Title} from "@angular/platform-browser";

export const APP_PROVIDERS = [
  Title,
  ContactsService,
  EventBusService,
  {provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'}
];
