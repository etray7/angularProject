import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading = new BehaviorSubject(false);
  isLoadingSubscriber = this.isLoading.asObservable();

  constructor() { }

  needSpinner() {
    this.isLoading.next(false);
  }

  stopSpinner() {
    this.isLoading.next(true);
  }
}
