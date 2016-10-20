import {API_ENDPOINT} from "./app.tokens";
import {ContactsService} from "./contacts.service";
import {EventBusService} from "./eventbus.service";

export const APP_PROVIDERS = [
  ContactsService,
  EventBusService,
  {provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'}
];
