import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/filter";

import {ContactsAppComponent} from "./contacts.component";
import {ContactsHeaderComponent} from "./contacts-header/contacts-header.component";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailViewComponent} from "./contacts-detail-view/contacts-detail-view.component";
import {ContactsAppRoutes} from "./app.routes";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {APP_PROVIDERS} from "./app.providers";
import {ContactDetailsComponent} from "./contact-details/contact-details.component";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailViewComponent,
    ContactDetailsComponent,
    ContactsEditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule
  ],
  providers: APP_PROVIDERS,
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
