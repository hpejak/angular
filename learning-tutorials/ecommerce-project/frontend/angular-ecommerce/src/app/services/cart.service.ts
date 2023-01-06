import {Injectable} from '@angular/core';
import {CartItem} from "../common/cart-item";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() {
  }

  addToCart(theCartItem: CartItem) {
    let existingCartItem: CartItem | undefined
      = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);

    if (existingCartItem !== undefined) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }
    this.computeCartTotals();
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }

  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    this.cartItems.forEach(currentCartItem => {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    })

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCardData(totalPriceValue, totalQuantityValue);
  }

  private logCardData(totalPriceValue: number, totalQuantityValue: number) {
    console.debug('Contents of the cart')
    this.cartItems.forEach(cartItem => {
      const subTotalPrice = cartItem.quantity * cartItem.unitPrice;
      console.debug(`name: ${cartItem.name}, quantity: ${cartItem.quantity}, unitPrice: ${cartItem.unitPrice},
      subtotalPrice: ${subTotalPrice}`);
      console.debug(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
      console.debug('-- ----')
    })
  }

  remove(theCartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCardItem => tempCardItem.id === theCartItem.id);

    if (itemIndex > -1){
      this.cartItems.splice(itemIndex,1);
      this.computeCartTotals();
    }
  }
}
