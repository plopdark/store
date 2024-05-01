import { Product } from './../../models/product';
import { Component, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule } from '@angular/router';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CommonModule } from '@angular/common';
import { TransportService } from '../../services/transport.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    HeaderComponent,
    CartItemComponent,
    ButtonModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public cartItems: {
    productTitle: string;
    productId: number;
    name: string;
    qty: number;
    price: number;
    priceHolder: number;
  }[] = [];

  public cartTotal = 0;
  public priceHolder: number = 0;
  public cartItemCount: number = 0;
  public userInfo: FormGroup;
  public name: FormControl;
  public email: FormControl;
  public password: FormControl;

  constructor(private transport: TransportService) {
    (this.name = new FormControl('', [Validators.required])),
      (this.email = new FormControl('', [
        Validators.required,
        Validators.email,
      ])),
      (this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])),
      (this.userInfo = new FormGroup({
        name: this.name,
        email: this.email,
        password: this.password,
      }));
  }

  ngOnInit(): void {
    const items = localStorage.getItem('cartItem');

    if (items) {
      this.cartItems = JSON.parse(items);
      this.cartItems.forEach((item) => {
        this.cartTotal += item.qty * item.price;
      });
    } else {
      this.cartItems = [];
    }

    this.transport.getInfo().subscribe((product: Product) => {
      console.log(product);
      this.addProductToCart(product);
      this.updateCartItemCount();
    });
  }

  public addProductToCart(product: Product) {
    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        this.cartItems[i].priceHolder += this.cartItems[i].price;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productTitle: product.title,
        productId: product.id,
        name: product.title,
        qty: 1,
        price: product.price,
        priceHolder: product.price,
      });
    }

    this.cartTotal += product.price;

    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
  }

  public removeItem(itemToRemove: any) {
    this.cartItems = this.cartItems.filter((item) => item !== itemToRemove);
    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
  }

  public decreaseCartTotal(removedItem: any) {
    this.cartTotal -= removedItem.price;
    this.cartItems.map((item) => {
      if (item.productId === removedItem.productId) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
  }

  public increaseCartTotal(addedItem: any) {
    this.cartTotal += addedItem.price;
    this.cartItems.map((item) => {
      if (item.productId === addedItem.productId) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    localStorage.setItem('cartItem', JSON.stringify(this.cartItems));
  }

  public updateCartItemCount() {
    this.cartItemCount = this.cartItems.reduce(
      (total, item) => total + item.qty,
      0
    );
    this.transport.sendCount(this.cartItemCount);
  }

  public sendOrder() {
    if (this.userInfo.valid) {
      const orderInfo = {
        user: {
          name: this.userInfo.value.name,
          email: this.userInfo.value.email,
          password: this.userInfo.value.password,
        },
        order: this.cartItems,
        totalPrice: this.cartTotal,
      };
      console.log(orderInfo);
    }
  }
}
