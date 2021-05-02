import { newE2EPage } from '@stencil/core/testing';

describe('stencil-shopping-cart-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-shopping-cart-header></stencil-shopping-cart-header>');

    const element = await page.find('stencil-shopping-cart-header');
    expect(element).toHaveClass('hydrated');
  });
});
