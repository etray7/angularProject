import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading = new BehaviorSubject(true);
  isLoadingSubscriber = this.isLoading.asObservable();

  constructor() { }

  needSpinner() {
    this.isLoading.next(false);
  }

  stopSpinner() {
    this.isLoading.next(true);
  }
}
