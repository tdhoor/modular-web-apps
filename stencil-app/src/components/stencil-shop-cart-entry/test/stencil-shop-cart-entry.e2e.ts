import { newE2EPage } from '@stencil/core/testing';

describe('stencil-shop-cart-entry', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-shop-cart-entry></stencil-shop-cart-entry>');

    const element = await page.find('stencil-shop-cart-entry');
    expect(element).toHaveClass('hydrated');
  });
});
