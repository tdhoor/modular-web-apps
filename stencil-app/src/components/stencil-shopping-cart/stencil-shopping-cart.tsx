import { Component, Host, h, State } from '@stencil/core';
import { ShoppingCartItem } from '../../utils/model/shoppingcart.interface';
import { ShoppingCartService } from '../../utils/service/shoppingcart.service';

@Component({
  tag: 'stencil-shopping-cart',
  styleUrl: 'stencil-shopping-cart.css',
  shadow: false,
})
export class StencilShoppingCart {

  @State()
  shoppingCartItems: ShoppingCartItem[];

  async componentWillLoad(){
    const response = await ShoppingCartService.getInstance().get();
    this.shoppingCartItems = response;
  }

  render() {
    return (
      <Host>
        <div class="row">
          <stencil-shopping-cart-header items={this.shoppingCartItems}></stencil-shopping-cart-header>
          {
            this.shoppingCartItems

            ?
              this.shoppingCartItems.map(i =>
                <stencil-shop-cart-entry shoppingCartEntry={i}></stencil-shop-cart-entry>
              )
            :

            <stencil-loading-item></stencil-loading-item>
          }
        </div>
      </Host>
    );
  }

}
