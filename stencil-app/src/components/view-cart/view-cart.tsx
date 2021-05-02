import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'view-cart',
  styleUrl: 'view-cart.css',
  shadow: false,
})
export class ViewCart {

  render() {
    return (
      <Host>
        <stencil-header></stencil-header>
          <div class="container">
              <stencil-shopping-cart></stencil-shopping-cart>
          </div>
        <stencil-footer></stencil-footer>
      </Host>
    );
  }
}
