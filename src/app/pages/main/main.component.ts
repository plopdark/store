import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { MainItemComponent } from './main-item/main-item.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderComponent,
    CartComponent,
    MainItemComponent,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  public sortByDate() {
    this.productList.sort((a, b) => a.id - b.id);
  }

  public sortByPrice() {
    this.productList.sort((a, b) => a.price - b.price);
  }
}
