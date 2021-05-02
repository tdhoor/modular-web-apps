import { newSpecPage } from '@stencil/core/testing';
import { ViewProductDetail } from '../view-product-detail';

describe('view-product-detail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ViewProductDetail],
      html: `<view-product-detail></view-product-detail>`,
    });
    expect(page.root).toEqualHtml(`
      <view-product-detail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </view-product-detail>
    `);
  });
});
