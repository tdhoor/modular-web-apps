import { newSpecPage } from '@stencil/core/testing';
import { ViewShop } from '../view-shop';

describe('view-shop', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewShop],
      html: `<view-shop></view-shop>`,
    });
    expect(page.root).toEqualHtml(`
      <view-shop>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-shop>
    `);
  });
});
