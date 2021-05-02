import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-shop-index',
  styleUrl: 'stencil-shop-index.css',
  shadow: false,
})
export class StencilShopIndex {

  render() {
    return (
      <Host>
        <stencil-header></stencil-header>
          <stencil-shopping-cart></stencil-shopping-cart>
          <stencil-product-listing></stencil-product-listing>
        <stencil-footer></stencil-footer>
      </Host>
    );
  }

}
