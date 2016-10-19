import {Routes} from "@angular/router";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";

export const ContactsAppRoutes:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'detail/:id', component: ContactsDetailComponent},
  {path: 'detail/:id/edit', component: ContactsEditorComponent}
];
