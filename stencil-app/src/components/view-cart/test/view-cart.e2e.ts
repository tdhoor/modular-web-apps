import { newE2EPage } from '@stencil/core/testing';

describe('view-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<view-cart></view-cart>');

    const element = await page.find('view-cart');
    expect(element).toHaveClass('hydrated');
  });
});
