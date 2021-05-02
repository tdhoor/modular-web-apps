import { Component, Host, h, Prop } from '@stencil/core';
import { ShoppingCartItem } from '../../utils/model/shoppingcart.interface';

@Component({
  tag: 'stencil-shopping-cart-header',
  styleUrl: 'stencil-shopping-cart-header.css',
  shadow: false,
})
export class StencilShoppingCartHeader {
  private totalPrice: number;

  @Prop()
  items: ShoppingCartItem[];

  componentWillLoad(){
    this.totalPrice = this.items.reduce((prev, next) => prev + next.amount * next.item.price, 0);
  }

  checkout() {
    alert('checkout')
  }

  render() {
    return (
      <Host>
        <nav>
          <div class="nav-wrapper">
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <strong>Total: { this.totalPrice }</strong>
                <a class="waves-effect waves-light btn" onClick={() => this.checkout()}>Checkout</a>
              </li>
            </ul>
          </div>
        </nav>
      </Host>
    );
  }

}
