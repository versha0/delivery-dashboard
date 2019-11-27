import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  messageSource = new BehaviorSubject<string>('initial value');
  message = this.messageSource.asObservable();
  constructor() {
  }

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
