import { newSpecPage } from '@stencil/core/testing';
import { StencilFooter } from '../stencil-footer';

describe('stencil-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilFooter],
      html: `<stencil-footer></stencil-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-footer>
    `);
  });
});
