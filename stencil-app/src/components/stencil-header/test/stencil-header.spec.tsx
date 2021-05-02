import { newSpecPage } from '@stencil/core/testing';
import { StencilHeader } from '../stencil-header';

describe('stencil-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilHeader],
      html: `<stencil-header></stencil-header>`,
    });
    expect(page.root).toEqualHtml(`
      <stencil-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencil-header>
    `);
  });
});
