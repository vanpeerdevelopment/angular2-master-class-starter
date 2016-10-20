import {Subject} from "rxjs/Subject";

import {EventBusArgs} from "./models/eventbus";

export class EventBusService {

  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType:string, data:any) {
    this._messages$.next({type: eventType, data: data});
  }

  observe(eventType:string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}
