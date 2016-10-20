import {API_ENDPOINT} from "./app.tokens";
import {ContactsService} from "./contacts.service";

export const APP_PROVIDERS = [
  ContactsService,
  {provide: API_ENDPOINT, useValue: 'http://localhost:4201/api'}
];
