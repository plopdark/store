import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TransportService } from '../../../services/transport.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public cartItemCount: number = 0;
  constructor(private router: Router, private transport: TransportService) {
    this.transport.getCount().subscribe((count: any) => {
      this.cartItemCount = count;
    });
  }

  isCart(): boolean {
    return this.router.url === '/cart';
  }
}
