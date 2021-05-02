import { newSpecPage } from '@stencil/core/testing';
import { StencilShopCartEntry } from '../stencil-shop-cart-entry';

describe('stencil-shop-cart-entry', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilShopCartEntry],
      html: `<stencil-shop-cart-entry></stencil-shop-cart-entry>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-shop-cart-entry>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-shop-cart-entry>
    `);
  });
});
