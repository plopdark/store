import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'store' },
  { path: 'store', component: MainComponent },
  { path: 'cart', component: CartComponent },
];
