import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  private showCreateOrderForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleOrderArea(value: any): void {
    if (value === 'add') {
      this.showCreateOrderForm = !this.showCreateOrderForm;
      this.subject.next(this.showCreateOrderForm);
    } else if (value === 'orders') {
      if (this.showCreateOrderForm) this.showCreateOrderForm = false;
      this.subject.next(this.showCreateOrderForm);
    }
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
