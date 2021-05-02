import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'view-shop',
  styleUrl: 'view-shop.css',
  shadow: false,
})
export class ViewShop {

  render() {
    return (
      <Host>
        <stencil-header></stencil-header>
          <div class="container">
            <stencil-product-listing></stencil-product-listing>
          </div>
        <stencil-footer></stencil-footer>
      </Host>
    );
  }

}
