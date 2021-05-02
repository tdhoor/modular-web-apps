import { newSpecPage } from '@stencil/core/testing';
import { StencilShopIndex } from '../stencil-shop-index';

describe('stencil-shop-index', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilShopIndex],
      html: `<stencil-shop-index></stencil-shop-index>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-shop-index>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-shop-index>
    `);
  });
});
