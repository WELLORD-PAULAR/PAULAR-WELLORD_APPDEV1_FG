import { Home } from './home/home';
import { ProductList } from './product-list/product-list';
import { Checkout } from './checkout/checkout';
import { Cart } from './cart/cart';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "", component: Home},
  {path: "products", component: ProductList},
  {path: "cart", component: Cart},
  {path: "checkout", component: Checkout}
];
