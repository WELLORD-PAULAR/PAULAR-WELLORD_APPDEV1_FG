import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
	private readonly _cartItems = signal<any[]>([]);

		get cartItems(): any[] {
			return this._cartItems();
		}

	addToCart(product: any) {
		const items = this._cartItems();
		const existing = items.find(i => i.name === product.name);
		if (existing) {
			existing.quantity++;
		} else {
			items.push({ ...product, quantity: 1 });
		}
		this._cartItems.set([...items]);
	}

	clearCart() {
		this._cartItems.set([]);
	}

	getTotal() {
		return this._cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
	}
}
