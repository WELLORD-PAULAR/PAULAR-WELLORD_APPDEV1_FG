import { Component, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})

export class Cart {
  private cartService = inject(CartService);
  private router = inject(Router);

  cartItems = computed<any[]>(() => this.cartService.cartItems as any[]);
  total = computed(() => this.cartService.getTotal() as number);

  checkout() {
    this.cartService.clearCart();
    this.router.navigate(['/checkout']);
  }
}

