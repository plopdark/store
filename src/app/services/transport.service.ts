import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class TransportService {
  public subject = new Subject<Product>();
  public subjectCount = new Subject<number>();

  constructor() {}

  private getLocalItems() {
    return JSON.parse(localStorage.getItem('cartItem')!);
  }

  public sendInfo(product: any) {
    this.subject.next(product);
  }

  public sendCount(product: number) {
    this.subjectCount.next(product);
  }

  public getInfo() {
    this.getLocalItems();
    return this.subject.asObservable();
  }

  public getCount() {
    return this.subjectCount.asObservable();
  }
}
