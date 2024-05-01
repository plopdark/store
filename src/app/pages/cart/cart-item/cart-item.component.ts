import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() cartItem: any;
  @Input() cartTotal: number = 0;
  @Input() priceHolder: number = 0;
  @Input() cartItemCount: number = 0;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter();
  @Output() itemAdded: EventEmitter<any> = new EventEmitter();

  constructor() {}

  public increaseQty() {
    localStorage.getItem('cartItem');
    this.cartItem.qty++;
    this.cartTotal += this.cartItem.price;
    this.priceHolder += this.cartItem.price;
    this.itemAdded.emit(this.cartItem);
  }

  public decreaseQty() {
    if (this.cartItem.qty >= 1) {
      this.cartItem.qty--;
      this.cartTotal -= this.cartItem.price;
      this.priceHolder -= this.cartItem.price;
      this.itemRemoved.emit(this.cartItem);
      if (this.cartItem.qty === 0) {
        this.remove.emit(this.cartItem);
      }
    }
  }
}
