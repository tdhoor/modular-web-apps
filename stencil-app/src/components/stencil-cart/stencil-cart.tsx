import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-cart',
  styleUrl: 'stencil-cart.css',
  shadow: true,
})
export class StencilCart {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
