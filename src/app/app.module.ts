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

import {ContactsAppComponent} from "./contacts.component";
import {ContactsHeaderComponent} from "./contacts-header/contacts-header.component";
import {ContactsListComponent} from "./contacts-list/contacts-list.component";
import {ContactsDetailComponent} from "./contacts-detail/contacts-detail.component";
import {ContactsAppRoutes} from "./app.routes";
import {ContactsEditorComponent} from "./contacts-editor/contacts-editor.component";
import {APP_PROVIDERS} from "./app.providers";

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent,
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
