import { newSpecPage } from '@stencil/core/testing';
import { StencilCart } from '../stencil-cart';

describe('stencil-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilCart],
      html: `<stencil-cart></stencil-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-cart>
    `);
  });
});
