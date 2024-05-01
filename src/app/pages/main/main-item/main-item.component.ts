import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TransportService } from '../../../services/transport.service';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-main-item',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './main-item.component.html',
  styleUrl: './main-item.component.scss',
})
export class MainItemComponent {
  @Input() productItem: Product;

  constructor(private transport: TransportService) {
    this.productItem = {} as Product;
  }

  public handleAddToCart() {
    this.transport.sendInfo(this.productItem);
  }
}
