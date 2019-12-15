import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading = new Subject();
  isLoadingSubscriber = this.isLoading.asObservable();

  constructor() { }

  needSpinner() {
    this.isLoading.next(false);
  }

  stopSpinner() {
    this.isLoading.next(true);
  }
}
