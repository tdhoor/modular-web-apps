import { newE2EPage } from '@stencil/core/testing';

describe('stencil-product-listing', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-product-listing></stencil-product-listing>');

    const element = await page.find('stencil-product-listing');
    expect(element).toHaveClass('hydrated');
  });
});
