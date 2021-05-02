import { newSpecPage } from '@stencil/core/testing';
import { StencilShoppingCartHeader } from '../stencil-shopping-cart-header';

describe('stencil-shopping-cart-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilShoppingCartHeader],
      html: `<stencil-shopping-cart-header></stencil-shopping-cart-header>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-shopping-cart-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-shopping-cart-header>
    `);
  });
});
