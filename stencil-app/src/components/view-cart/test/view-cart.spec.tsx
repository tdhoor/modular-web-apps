import { newSpecPage } from '@stencil/core/testing';
import { ViewCart } from '../view-cart';

describe('view-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewCart],
      html: `<view-cart></view-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <view-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-cart>
    `);
  });
});
