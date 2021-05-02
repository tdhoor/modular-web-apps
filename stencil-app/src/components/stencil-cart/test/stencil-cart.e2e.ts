import { newE2EPage } from '@stencil/core/testing';

describe('stencil-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-cart></stencil-cart>');

    const element = await page.find('stencil-cart');
    expect(element).toHaveClass('hydrated');
  });
});
