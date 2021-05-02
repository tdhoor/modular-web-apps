import { newE2EPage } from '@stencil/core/testing';

describe('view-product-detail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-product-detail></view-product-detail>');

    const element = await page.find('view-product-detail');
    expect(element).toHaveClass('hydrated');
  });
});
