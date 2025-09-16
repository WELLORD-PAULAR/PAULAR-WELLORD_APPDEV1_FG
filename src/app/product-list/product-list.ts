import { CommonModule } from '@angular/common';
import { Component, signal, computed, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products = [
    { name: "Beer", price: 5.99, stock: 20 },
    { name: "Wine", price: 15.99, stock: 15 },
    { name: "Whiskey", price: 25.99, stock: 10 },
    { name: "Vodka", price: 19.99, stock: 8 },
    { name: "Rum", price: 12.99, stock: 12 },
    { name: "Tequila", price: 22.99, stock: 0 },
    { name: "Gin", price: 18.99, stock: 7 },
    { name: "Cider", price: 6.99, stock: 25 },
    { name: "Sake", price: 14.99, stock: 9 }
  ];

  searchTerm = signal('');
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.products;
    return this.products.filter(p => p.name.toLowerCase().includes(term));
  });


  cartService = inject(CartService);
  cartItems = computed(() => this.cartService.cartItems);
  cartTotal = computed(() => this.cartService.getTotal());

  addToCart(product: any) {
    if (product.stock > 0) {
      this.cartService.addToCart(product);
      product.stock--;
    }
  }


}
