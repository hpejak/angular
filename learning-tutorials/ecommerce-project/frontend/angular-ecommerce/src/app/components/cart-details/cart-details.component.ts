import {Component, OnInit} from '@angular/core';
import {CartItem} from "../../common/cart-item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  cartPrice: number = 0;
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.listCardDetails();
  }

  private listCardDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.cartPrice = data
    )
    this.cartService.totalQuantity.subscribe(
      data => this.cartQuantity = data
    )

    this.cartService.computeCartTotals()

  }

  incrementQuantity(tempCartItem: CartItem) {
    this.cartService.addToCart(tempCartItem);
  }

  decrementQuantity(tempCartItem: CartItem) {
    this.cartService.decrementQuantity(tempCartItem);
  }

  remove(tempCartItem: CartItem) {
    this.cartService.remove(tempCartItem)
  }
}
