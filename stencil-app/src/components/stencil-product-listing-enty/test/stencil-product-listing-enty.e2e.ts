import { newE2EPage } from '@stencil/core/testing';

describe('stencil-product-listing-enty', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-product-listing-enty></stencil-product-listing-enty>');

    const element = await page.find('stencil-product-listing-enty');
    expect(element).toHaveClass('hydrated');
  });
});
