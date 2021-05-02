import { newSpecPage } from '@stencil/core/testing';
import { StencilProductListingEnty } from '../stencil-product-listing-enty';

describe('stencil-product-listing-enty', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilProductListingEnty],
      html: `<stencil-product-listing-enty></stencil-product-listing-enty>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-product-listing-enty>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-product-listing-enty>
    `);
  });
});
