import { newSpecPage } from '@stencil/core/testing';
import { StencilProductDetail } from '../stencil-product-detail';

describe('stencil-product-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilProductDetail],
      html: `<stencil-product-detail></stencil-product-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-product-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-product-detail>
    `);
  });
});
