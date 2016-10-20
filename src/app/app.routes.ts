import {Routes} from "@angular/router";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {ContactsCreatorComponent} from "./contacts-creator/contacts-creator.component";

export const ContactsAppRoutes:Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'detail/new', component: ContactsCreatorComponent},
  {path: 'detail/:id', component: ContactsDetailViewComponent},
  {path: 'detail/:id/edit', component: ContactsEditorComponent}
];
