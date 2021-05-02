import { newSpecPage } from '@stencil/core/testing';
import { StencilProductListing } from '../stencil-product-listing';

describe('stencil-product-listing', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilProductListing],
      html: `<stencil-product-listing></stencil-product-listing>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-product-listing>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-product-listing>
    `);
  });
});
